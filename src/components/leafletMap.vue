<template>
  <v-container class="pb-0">
    <div id="map" ref="map"></div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import "leaflet/dist/leaflet.css";
import 'leaflet.locatecontrol/dist/L.Control.Locate.css'; // 导入 CSS
import * as L from 'leaflet';
import 'leaflet.locatecontrol'; 
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import '@fortawesome/fontawesome-free/css/all.min.css';

const createSnackbar = useSnackbar()
const initialMap = ref(null);
const markers = ref([]); // 管理和儲存地圖上的標記
const marks = ref([]);// 從後端獲取的地標資料

const { api } = useApi()

// 接收從父組件傳來的搜尋字串
const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  selectedCity: {
    type: String,
    default: null
  },
  selectedArea: {
    type: String,
    default: null
  },
  selectedSubcategories: {
    type: Array,
    default: () => []
  }
});
// 地圖初始化
const initializeMap = () => {
  initialMap.value = L.map('map').setView([25.049183268037577, 121.51342818384893], 12);
  
  if (initialMap.value) {
    // 地圖圖層添加
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);

    // 確保移除舊的定位控件
    initialMap.value.eachLayer(layer => { // eachLayer 遍歷地圖上的所有圖層
      if (layer instanceof L.Control.Locate) { // L.Control.Locate 用來顯示定位功能的控制元件
        initialMap.value.removeControl(layer); // 如果找到 L.Control.Locate 的圖層，則使用 removeControl 方法將其從地圖中移除
      }
    });

    // 添加定位功能，允許用戶獲取其當前位置
    L.control.locate({
      position: 'topleft',
      drawCircle: true, // 以位置為中心一定距離的圓
      drawMarker: true,
      markerStyle: { // 設置標記的樣式
        color: 'black',
        opacity: 0.8,
        weight: 0.8
      },
        locateOptions: { // 配置定位的選項
        enableHighAccuracy: true,
        maxZoom: 16
        },
      icon: 'fa fa-solid fa-crosshairs', // 設置定位標記的icon
      onLocationError: function (err) {
        console.error(err.message);
        createSnackbar({ // 當定位失敗時，顯示錯誤訊息
          text: err.message,
          snackbarProps: {
            color: 'red',
          },
        });
      }
    }).addTo(initialMap.value);
  } else {
    console.error('Map initialization failed.');
  }
};
 


const categoryIcons = {
  '服務對象': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2377/2377871.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '長期照顧': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/12264/12264430.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '身心障礙': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/17573/17573294.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '兒童及少年': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5759/5759522.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '心理衛生': L.icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/4010/4010654.png',
    // iconUrl: 'https://cdn-icons-png.flaticon.com/512/1090/1090903.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '婦女': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/7457/7457069.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '社會救助': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/784/784791.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '綜合': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5153/5153858.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '其他': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5672/5672993.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })
};

// 取得後端地標資訊
const loadMapData = async () => {
  try {
    const { data } = await api.get('/landmark');
    marks.value = data.result.data;
    updateMarkers();
  } catch (error) {
    console.error('Error fetching data:', error);
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red',
      },
    });
  }
};

// 更新標記 (包括篩選功能)
const updateMarkers = () => {
  if (!initialMap.value) return; // 如果地圖尚未初始化則不進行後續操作

  // 清除現有的標記 : 遍歷 markers 陣列中的所有標記，並從地圖上移除
  markers.value.forEach(marker => initialMap.value.removeLayer(marker));
  markers.value = []; // 將 markers 陣列重置為空，以便為新標記做準備

  // 根據篩選條件進行過濾
  const filteredMarks = marks.value.filter(item => {
    const matchesCity = !props.selectedCity || item.address.includes(props.selectedCity); // 檢查地址是否包含所選的城市
    const matchesArea = !props.selectedArea || item.address.includes(props.selectedArea); // 檢查地址是否包含所選的區域
    const matchsQuery = !props.searchQuery || item.name.toLowerCase().includes(props.searchQuery.toLowerCase()) // 檢查名稱是否符合搜尋字串
    const matchesSubcategory = props.selectedSubcategories.length === 0 || // 檢查項目的類別是否符合所選的子類別
      item.categories.some(subcat => props.selectedSubcategories.includes(subcat));
    return matchesCity && matchesArea && matchesSubcategory && matchsQuery
  });

  // 過濾後的數據添加標記到地圖
  filteredMarks.forEach(item => {
    const lat = parseFloat(item.lat); // parseFloat 用於將字符串解析為浮點數
    const lng = parseFloat(item.lng);
    const cl = item.cl; // 取出類別
    const icon = categoryIcons[cl] || categoryIcons['綜合']; // 預設圖標

    if (isFinite(lat) && isFinite(lng)) { // isFinite 檢查一個值是否為有限數字
      // 添加標記
      const marker = L.marker([lat, lng], { icon })
        .addTo(initialMap.value)
        .bindPopup(`<h2 style="margin:5px 0 5px 0;text-decoration: underline;color:#1b3f63;">${item.name}</h2>
        <h3 style="margin: 2px 0 2px 0;color:gray;">地址：${item.address}</h3>
        <h3 style="margin: 2px 0 2px 0;color:gray;">電話：${item.tel}</h3>
        <span style="font-size: 1.17em;font-weight: bold;color:gray;">類別：</span><span style="font-size: 1.17em;font-weight: bold;margin: 2px 0 2px 0;color:#7b97a6;">${item.categories.join(' | ') }</span>
        <div><span style="font-size: 1.17em;font-weight: bold;color:gray;">簡介：</span><h4 style="margin: 2px 0 2px 0;color:gray;white-space: pre-line;">${item.description}</h4></div>`);
      
      markers.value.push(marker);
    } else {
      console.warn(`Invalid coordinates for item: ${JSON.stringify(item)}`);
    }
  });
};
// 監聽過濾的變化重新 updateMarkers 
watch(() => [props.searchQuery, props.selectedCity, props.selectedArea, props.selectedSubcategories], updateMarkers);

onMounted(async () => {
  initializeMap();
  await loadMapData();
});



</script>

<style scoped>
#map{
    min-width: 450px;
    width:100%;
    height: 100vh;
    border: 1px solid #000;
  }
::v-deep .leaflet-popup {
  background-color: white;
  border: 1px solid #000; /* 邊框顏色 */
  border-radius: 5px; /* 邊框圓角 */
}

::v-deep .leaflet-popup-content{
  color:rgb(85, 85, 85);
}
@media(min-width:960px){
  #map {
    min-width: 450px;
    border: 1px solid #000;
    border-radius: 15px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-10%);
  }
}

@media(min-width:1280px){
  #map{
    width: 85%;
    height: 75%;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-80%,-50%);
  }
}
</style>



