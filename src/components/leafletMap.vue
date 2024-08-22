<template>
  <v-container>
    <div id="map" ref="map"></div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import "leaflet/dist/leaflet.css";
import 'leaflet.locatecontrol/dist/L.Control.Locate.css'; // 导入 CSS
import * as L from 'leaflet';
import 'leaflet.locatecontrol'; // 导入插件
import 'leaflet.markercluster';
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import '@fortawesome/fontawesome-free/css/all.min.css';

const createSnackbar = useSnackbar()
const initialMap = ref(null);
const markers = ref([]);
const marks = ref([]);

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
// 地圖初始化和地標加載
const initializeMap = () => {
  initialMap.value = L.map('map').setView([25.049183268037577, 121.51342818384893], 12);

  if (initialMap.value) {
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);

    // 確保移除舊的定位控件
    initialMap.value.eachLayer(layer => {
      if (layer instanceof L.Control.Locate) {
        initialMap.value.removeControl(layer);
      }
    });


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
        maxZoom: 13
        },
      icon: '', // 設置定位標記的icon
      onLocationError: function (err) {
        console.error(err.message);
        createSnackbar({
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
  // const Now = new L.Icon({
  //   iconUrl: 'https://cdn-icons-png.flaticon.com/512/3138/3138736.png',
  //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  //   iconSize: [40, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowSize: [41, 41]
  // });

  // // 獲取使用者位置
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition( // web API 用於獲取用戶當前位置
  //     (position) => {
  //       const lat = position.coords.latitude;
  //       const lng = position.coords.longitude;
  //       L.marker([lat, lng], { icon: Now })
  //         .addTo(initialMap.value) // 標記放到地圖上
  //         .bindPopup('<h2>目前位置</h2>')
  //         .openPopup();
  //       initialMap.value.setView([lat, lng], 12);
  //     },
  //     (error) => {
  //       console.error('Error getting user location:', error);
  //     }
  //   );
  // } else {
  //   console.warn('Geolocation is not supported by this browser.');
  // }

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



const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/7596/7596723.png', // 替換為你的圖標 URL
  iconSize: [32, 32], // 圖標尺寸
  iconAnchor: [16, 32], // 圖標的錨點位置
  popupAnchor: [0, -32] // 彈出框的錨點位置
});


const categoryIcons = {
  '服務對象': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2377/2377871.png', // 替換為你實際的圖標 URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '長期照顧': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/12264/12264430.png', // 替換為你實際的圖標 URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '身心障礙': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/17573/17573294.png', // 替換為你實際的圖標 URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '兒童及少年': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5759/5759522.png', // 替換為你實際的圖標 URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  }),
  '婦女': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/7457/7457069.png', // 替換為你實際的圖標 URL
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
  '其他': L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3010/3010860.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })
};



// 更新標記 (包括篩選功能)
const updateMarkers = () => {
  markers.value.forEach(({ marker }) => marker.remove());
  const filteredMarks = marks.value
    .filter(mark =>
      // 檢查 mark.address 是否包含選到的城市
      (!props.selectedCity || mark.address.includes(props.selectedCity)) &&
      // 檢查 mark.address 是否包含選到的地區
      (!props.selectedArea || mark.address.includes(props.selectedArea)) &&
      // 檢查 mark.name 是否包含搜尋的字
      (!props.searchQuery || mark.name.toLowerCase().includes(props.searchQuery.toLowerCase())) &&
      // 檢查 mark.categories 是否包含選中的子類別
      (props.selectedSubcategories.length === 0 || mark.categories.some(cat => props.selectedSubcategories.includes(cat)))
    );

  markers.value = filteredMarks.map(mark => {
    const category = mark.categories.find(cat => Object.keys(categoryIcons).includes(cat)) || '其他';
    const icon = categoryIcons[category] || categoryIcons['其他'];


    const marker = L.marker([mark.lat, mark.lng], { icon })
      .bindPopup(
        `<h2 style="margin:5px 0 5px 0;text-decoration: underline;color:#1b3f63;">${mark.name}</h2>
        <h3 style="margin: 2px 0 2px 0;color:gray;">地址：${mark.address}</h3>
        <h3 style="margin: 2px 0 2px 0;color:gray;">電話：${mark.tel}</h3>
        <span style="font-size: 1.17em;font-weight: bold;color:gray;">類別：</span><span style="font-size: 1.17em;font-weight: bold;margin: 2px 0 2px 0;color:#7b97a6;">${mark.categories.join(' | ') }</span>
        <div><span style="font-size: 1.17em;font-weight: bold;color:gray;">簡介：</span><h4 style="margin: 2px 0 2px 0;color:gray;word-wrap: break-word;">${mark.description}</h4></div>`
        ,
          {
            className: 'custom-popup-class',
            maxWidth: 400, // 設置最大寬度
            minWidth: 100, // 設置最小寬度
            maxHeight: 250, // 設置最大高度
            minHeight: 100
          }
        )
      .addTo(initialMap.value);
    return { marker, address: mark.address };
  });
};
// 監聽搜尋字串變化
watch(() => [props.searchQuery, props.selectedCity, props.selectedArea, props.selectedSubcategories], updateMarkers);

onMounted(async () => {
  initializeMap();
  await loadMapData();
});


// try {
//       const response = await axios.get('/api/public/js/mapdata.json');
//       const data = response.data;

//       // 將 JSON 資料中的每個地標添加到地圖
//       data.forEach((item) => {
//         const lat = parseFloat(item.lat);
//         const lng = parseFloat(item.lng);

//         if (isFinite(lat) && isFinite(lng) && lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
//           L.marker([lat, lng], { icon: greenIcon })
//             .addTo(initialMap.value)
//             .bindPopup(
//               `<h2>${item.name}</h2>
//               <br>
//               <h3>地址 : ${item.city}${item.area}${item.add}</h3>`
//             );
//         } else {
//           console.warn(`Invalid coordinates for item: ${JSON.stringify(item)}`);
//         }
//       });
//     } catch (error) {
//       console.error('Error fetching JSON data:', error);
//     }
</script>

<style scoped>
#map {
  width: 50%;
  height: 650px;
  border: 1px solid #000;
  border-radius: 15px;
  position: absolute;
  top: 18%;
  left: 12%;
}
::v-deep .leaflet-popup {
  background-color: white;
  border: 1px solid #000; /* 邊框顏色 */
  border-radius: 5px; /* 邊框圓角 */
}

::v-deep .leaflet-popup-content{
  color:rgb(85, 85, 85);
}

</style>



