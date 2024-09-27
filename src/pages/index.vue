<template>''
  <v-row style="height: 95vh;">
    <v-col cols="12" lg="8" class="map_col order-2 order-lg-1">
      <Leaflet-map  
      :searchQuery="searchQuery"
      :selectedCity="selectedCity"
      :selectedArea="selectedArea"
      :selectedSubcategories="selectedSubcategories"
      />
    </v-col >
    <v-col cols="12" lg="4" class="map_col order-1 order-lg-2">
      <v-card variant="outlined" class="overflow-y-auto find-resource">
          <v-toolbar color="secondary" prominent class=" bb-1">
              <v-toolbar-title>
                  服務查詢
              </v-toolbar-title>
          </v-toolbar>
          <v-card-item>
            <div class="text-right">
              <v-btn
                type="submit"
                variant="plain"
                class="rounded-md bb-1 mt-2 bg-grey-lighten-4"
                density="comfortable"
                :ripple="false"
                height="40"
                width="80"
                @click="clear()"
                >清空條件</v-btn>
              </div>
              <Search
              class="my-5"
              max-width="1000px"
              v-model="searchQuery"
              label="輸入資源地址"
              />
              <div>
              <v-select  
              v-model="selectedCity"
              :items="cities"
              min-width="215px"
              label="縣市"
              class="me-4 d-none d-md-inline-block"
              style="width: 48%;"
              density="comfortable"
              variant="outlined"
              @change="onCityChange"
              >
              </v-select>
              <v-select  
              v-model="selectedArea"
              :items="areas"
              min-width="215px"
              label="鄉鎮市區"
              class="d-none d-md-inline-block"
              style="width: 48%;"
              density="comfortable"
              variant="outlined"
              ></v-select>
            </div>

              <v-toolbar density="compact">
                  <v-toolbar-title class="ms-5 text-body-1">
                    服務類別
                  </v-toolbar-title>
              </v-toolbar>
              <v-expansion-panels  variant="accordion" class="">
                  <v-expansion-panel
                  v-for="(category, index) in categories"
                  :key="index"
                  v-model="selectedcategories"
                  @click="handlePanelClick(category, index)"
                  >
                  <v-expansion-panel-title>{{ category.name }}</v-expansion-panel-title>
                  <v-expansion-panel-text>
                      <v-checkbox
                      v-for="(subcategory, subIndex) in category.subcategories"
                      :key="subIndex"
                      v-model="selectedSubcategories"
                      :label="subcategory"
                      :value="subcategory"
                      hide-details
                      ></v-checkbox>
                  </v-expansion-panel-text>
                  </v-expansion-panel>
              </v-expansion-panels>
          </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref, watch, onMounted, defineEmits } from 'vue';
import axios from 'axios';
import { definePage } from 'vue-router/auto'
import leafletMap from '@/components/leafletMap.vue';
definePage({
meta: {
  title: 'KeeperS | 資源查詢'
}
})

const emit = defineEmits();


const categories = ref([
{ name: '服務對象', subcategories: ['長期照顧','身心障礙','婦女','兒童及少年','心理衛生','社會救助','綜合','其他'] },
{ name: '長期照顧', subcategories: ['日照中心','護理之家','居家服務','交通接送','家庭托顧'] },
{ name: '身心障礙', subcategories: ['身心障礙者服務中心','輔具中心','職業重建中心','小作所','庇護工場'] },
{ name: '兒童及少年', subcategories: ['少年福利服務中心','親子館','課後班'] },
{ name: '婦女', subcategories: ['婦女福利服務中心','新住民家庭服務中心'] },
{ name: '社會救助', subcategories: ['經濟補助','待用餐','基金會','社會福利中心'] },
{ name: '其他', subcategories: ['其他'] }
]);
const selectedSubcategories = ref([])
const selectedcategories = ref([])

// 縣市篩選
const cities = ref([]);
const areas = ref([]);
const cityAreaMap = ref({});
const selectedCity = ref(null);
const selectedArea = ref(null);
// 設定需要的縣市
const requiredCities = ['台北市', '新北市'];
// 加載 JSON 資料
const loadData = async () => {
try {
  const response = await axios.get('https://gist.githubusercontent.com/Wcc723/ac712d2bb5c4e61df99d7c5b7f3746e1/raw/2ebe2f94c3bbbeec254159b7dfe71a007f1696cd/tw-zipcode.json');
  // console.log('Data loaded:', response.data) // 確定有抓到檔案資料
  processData(response.data);
} catch (error) {
  console.error('Error loading JSON file:', error);
}
};

// 處理數據
const processData = (data) => {
const cityAreaMapping = {};
const cityList = [];

Object.keys(data).forEach(city => {
  if (requiredCities.includes(city)) {
  cityList.push(city);
  cityAreaMapping[city] = Object.keys(data[city]);
  }
});

// console.log('Cities:', cityList); // 新北市、台北市
// console.log('City Area Map:', cityAreaMapping); // 台北市、新北市的縣市區域
cities.value = cityList;
cityAreaMap.value = cityAreaMapping;
};


// 更新鄉鎮市區選項
const onCityChange = (city) => {
console.log('Selected City:', city); // 輸出選擇的縣市
areas.value = cityAreaMap.value[city] || [];
selectedArea.value = null; // 重置鄉鎮市區選擇
};
watch(selectedCity, (newCity) => {
onCityChange(newCity);
})
// 組件掛載時加載數據
onMounted(() => {
loadData();
});



const searchQuery = ref('');
const handlePanelClick = (category, index) => {
  console.log('Clicked panel:', category.name);
  console.log('Panel index:', index);
  // 清空選中的子類別
  const newSelectedSubcategories = selectedSubcategories.value.filter(
    (subcategory) => category.subcategories.includes(subcategory)
  );

  // 如果當前選擇的子類別都在當前面板中，則更新選擇
  selectedSubcategories.value = newSelectedSubcategories;
};


const clear = () =>{
  selectedSubcategories.value = []
  selectedcategories.value  = []
  selectedArea.value = []
  selectedCity.value = []
  searchQuery.value = ''
}
</script>
<style scoped>
.map_col{
    position: relative;
    height: 60%;
    width: 100%;
  }
@media(min-width:1280px){
  .map_col{
    position: relative;
    height: 100%;
    width: 100%;
  }
}
.find-resource{
  height: 80%;
  min-width: 450px;
  width: 80%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-40%);
  
}
@media(min-width:1280px){
  .find-resource{
    height: 75%;
    top: 50%;
    left: 42%;
    transform: translate(-50%,-50%);
  }
}
.bb-1{
  border-bottom: 1px solid #7a7a7a;
}

</style>