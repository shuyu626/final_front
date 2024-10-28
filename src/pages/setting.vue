<template>
  <div 
    v-if="$vuetify.display.xs" 
    style=" z-index: 5;" 
    class="position-fixed bg-primary d-flex justify-center align-center"
  >

    <!-- <v-icon v-show="!drawerOpen" @click="smToggleDrawer">{{ smDrawerOpen  ='mdi-chevron-right' }}</v-icon> -->
    
    <div  
        class="position-fixed bg-primary tabs-show" 
        style="width:94%; height: 40px; z-index: 5;border-radius: 10px;left: 50%; bottom: 0.8%; transform: translateX(-50%);">
      <v-tabs
        v-model="tab"
        color="teal-darken-4"
        direction="horizontal"
        show-arrows
        style="height: 40px;border-radius: 10px;"
        fixed-tabs
      >
        <v-tab prepend-icon="mdi-account" value="option-1"></v-tab>
        <v-tab prepend-icon="mdi-map-marker" value="option-2"></v-tab>
        <v-tab prepend-icon="mdi-note-edit" value="option-3"></v-tab>
        <v-tab prepend-icon="mdi-book-cog" value="option-4"></v-tab>
        <v-tab prepend-icon="mdi-message-alert" value="option-5"></v-tab>
      </v-tabs>
    </div>
  </div>
  <div v-else="$vuetify.display.sm " class="position-fixed bg-primary" style="width: 40px;height: 290px;left: 0%;bottom:2%;z-index: 5;">
        <v-tabs
          v-model="tab"
          color="teal-darken-4"
          direction="vertical"
          show-arrows
          style="width: 40px;"
          fixed-tabs
        >
          
          <v-tab prepend-icon="mdi-account" value="option-1"></v-tab>
          <v-tab prepend-icon="mdi-map-marker" value="option-2"></v-tab>
          <v-tab prepend-icon="mdi-note-edit" value="option-3"></v-tab>
          <v-tab prepend-icon="mdi-book-cog" value="option-4"></v-tab>
          <v-tab prepend-icon="mdi-message-alert" value="option-5"></v-tab>
        </v-tabs>
        <div style="width: 40px;height: 40px;left: 0%;bottom:3%;z-index: 5;" class="position-fixed bg-primary  d-flex justify-center align-center">
          <v-icon v-show="!drawerOpen" @click="toggleDrawer">{{ drawerOpen ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
      </div>
    </div>
    <div>
    
    <!-- 側邊欄 -->
    <v-navigation-drawer 
      class="b-1 text-center bg-primary" 
      width="200" 
      v-model="drawerOpen"
    >
      <div>
        <v-tabs
          v-model="tab"
          color="teal-darken-4"
          direction="vertical"
          show-arrows
        >
          <v-tab prepend-icon="mdi-account" text="基本資料" value="option-1" height="100" class="text-body-1 ms-1" @click="toggleDrawer(false)"></v-tab>
          <v-tab prepend-icon="mdi-map-marker" text="地標管理" value="option-2" height="100" class="text-body-1 ms-1" @click="toggleDrawer(false)"></v-tab>
          <v-tab prepend-icon="mdi-note-edit" text="貼文管理" value="option-3" height="100" class="text-body-1 ms-1" @click="toggleDrawer(false)"></v-tab>
          <v-tab prepend-icon="mdi-book-cog" text="活動收藏" value="option-4" height="100" class="text-body-1 ms-1" @click="toggleDrawer(false)"></v-tab>
          <v-tab prepend-icon="mdi-message-alert" text="物資管理" value="option-5" height="100" class="text-body-1 ms-1" @click="toggleDrawer(false)"></v-tab>
        </v-tabs>
      </div>
      <div style="width: 40px;height: 40px;bottom: 3%;right: 0;" class="position-absolute me-5 d-flex justify-center align-center">
          <!-- 切換側邊欄的按鈕 -->
          <v-icon @click="toggleDrawer">{{ drawerOpen ? 'mdi-chevron-left' : 'mdi-chevron-right'  }}</v-icon>
      </div>
      
    </v-navigation-drawer>
  </div>
  <v-card class="h-100">
    <div class="d-flex flex-row h-100">
      <v-container>
        <v-tabs-window v-model="tab" class="mt-10">
<!-- 01 基本資料管理 -->
          <v-tabs-window-item value="option-1">
            <AccountTable/>
          </v-tabs-window-item>




<!-- 02 地標管理 -->
          <v-tabs-window-item value="option-2" >
            <!-- 麵包屑 - 顯示目前頁面位置 -->
            <v-breadcrumbs v-if="!mobile" :items="mark">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
          <LandmarkTable/>
          </v-tabs-window-item>



<!-- 03 貼文管理 -->
          <v-tabs-window-item value="option-3">
          <!-- 麵包屑 - 顯示目前頁面位置 -->
          <v-breadcrumbs v-if="!mobile" :items="post">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
            <div class=" group-container mx-auto">
              <v-tabs v-model="subTab" color="yellow-darken-3" class="mt-3s">
              <v-tab value="find">物資募資</v-tab>
              <v-tab value="share">物資分享</v-tab>
              <v-tab value="event">活動管理</v-tab>
            </v-tabs>
            </div>
            

            <v-tabs-window v-model="subTab" class="mt-2">
              <v-tabs-window-item value="find">
                <div class="mx-auto mb-5 rounded-lg">
                  <FindTable/>
                </div>
              </v-tabs-window-item>

              <v-tabs-window-item value="share">
                <div class="mx-auto mb-5 rounded-lg">
                  <ShareTable/>
                </div>
              </v-tabs-window-item>

              <v-tabs-window-item value="event">
                <div class="mx-auto mb-5 rounded-lg">
                  <EventTable/>
                </div>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-tabs-window-item>
           <!-- 物資募資
           <div class="  mx-auto mb-5 rounded-lg">
              <FindTable/>
            </div>
            物資分享
            <div class="  mx-auto mb-5 rounded-lg">
            <ShareTable/>
          </div>
            活動管理
            <div class="  mx-auto mb-5 rounded-lg">
            <EventTable/>
          </div>
          </v-tabs-window-item> -->
          



          <!-- 活動收藏管理 -->
          <v-tabs-window-item value="option-4">
            <!-- 麵包屑 - 顯示目前頁面位置 -->
            <v-breadcrumbs v-if="!mobile" :items="event">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
            
          <div class="mx-auto rounded-lg my-5 mark-container" style="border:1.2px solid #000;" v-for="event in events" :key="event._id">
            <v-card variant="flat" class="rounded-lg pa-3 pa-sm-4" style="background-color: #f7f2e9;">
                <v-row class="align-center" >
                    <v-col cols="5" sm="3" class="align-self-center align-sm-self-start">
                      <router-link :to="'/event/'+ event._id" style="text-decoration: none">
                        <v-img :src="event.image" class="mx-auto b-1 rounded-lg mark-image" cover></v-img>
                      </router-link>
                      </v-col>
                    <v-col cols="7" sm="9" class="align-self-start pl-0">
                      <v-card-title class="pl-0 pl-sm-2 font-weight-bold">{{ event.title }}</v-card-title>
                      <v-card-subtitle class="pl-0 pl-sm-2 font-weight-bold">{{ event.organizer }}</v-card-subtitle>
                      <v-card-subtitle class="pl-0 pl-sm-2 font-weight-bold mt-2">{{ event.date }}</v-card-subtitle>
                      <!-- <v-card-text style="white-space: pre-line;">{{ event.description }}</v-card-text> -->
                      <div class="text-end h-100 w-100 mt-5">
                        <v-btn
                          v-if="isFavorite"
                          color="medium-emphasis"
                          :icon="isFavorite ? 'mdi-heart' : 'mdi-heart-outline'"
                          :class="isFavorite ? 'me-5 mb-2 bg-red-lighten-4' : 'me-5 mb-2 bg-info'"
                          size="small"
                          class="bg-transparent m-0 d-sm-none"
                          @click="toggleFavorite(event._id)"
                          elevation="0"
                          variant="text"
                        ></v-btn>
                      </div>
                      <div class="text-end h-100 w-100 mt-5 d-none d-sm-block">
                        <v-btn id="btn" v-if="isFavorite"  text="取消收藏" prepend-icon="mdi-bookmark" variant="outlined" style="background-color: #F5B4B4; " @click="toggleFavorite(event._id)" class="font-weight-black  mark-btn pa-1" ></v-btn>
                      </div>
                  </v-col>
                </v-row>
                <v-row>
                  
                </v-row>                
            </v-card>
            
          </div>
          <v-row v-if="events.length==0">
            <v-col class="text-center mt-15" style="color:#bfbfbf;">
              <h1>暫無任何活動收藏</h1>
            </v-col>
          </v-row>
          
          </v-tabs-window-item>


          <!-- 讀取物資回覆 -->
          <v-tabs-window-item value="option-5">
            <!-- 麵包屑 - 顯示目前頁面位置 -->
            <v-breadcrumbs v-if="!mobile" :items="material">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
            <div class=" group-container mx-auto">
              <v-tabs v-model="replayTab" color="yellow-darken-3" class="mt-3s">
              <v-tab value="findReply">物資募資</v-tab>
              <v-tab value="shareReply">物資分享</v-tab>
            </v-tabs>
            </div>
            

            <v-tabs-window v-model="replayTab" class="mt-2">
              <v-tabs-window-item value="findReply">
                <div class="mx-auto mb-5 rounded-lg">
                  <FindReplyTable/>
                </div>
              </v-tabs-window-item>

              <v-tabs-window-item value="shareReply">
                <div class="mx-auto mb-5 rounded-lg">
                  <ShareReplyTable/>
                </div>
              </v-tabs-window-item>

            </v-tabs-window>
          
          
          
            <!-- <div class="  mx-auto mb-5 rounded-lg">
              <ShareReplyTable/>
              <FindReplyTable/>
            </div> -->
          </v-tabs-window-item>
          
        </v-tabs-window>
      </v-container>
    </div>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { definePage } from 'vue-router/auto'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'
import EventTable from '@/components/table/eventTable.vue'
import ShareTable from '@/components/table/shareTable.vue'
import FindTable from '@/components/table/findTable.vue'
import AccountTable from '@/components/table/accountTable.vue'
import MaterialTable from '@/components/table/shareReplyTable.vue'
import ShareReplyTable from '@/components/table/shareReplyTable.vue'
import FindReplyTable from '@/components/table/findReplyTable.vue'
import LandmarkTable from '@/components/table/landmarkTable.vue'
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()


definePage({
  meta: {
    title: ' KeeperS | 會員管理'
  }
})

const mark=ref([
{
    title: '會員中心',
    disabled: false,
    to: '/setting',
  },
  {
    title: '地標管理',
    disabled: true,
  }
])

const post=ref([
{
    title: '會員中心',
    disabled: false,
    to: '/setting',
  },
  {
    title: '貼文管理',
    disabled: true,
  }
])

const event=ref([
{
    title: '會員中心',
    disabled: false,
    to: '/setting',
  },
  {
    title: '活動收藏',
    disabled: true,
  }
])

const material =ref([
{
    title: '會員中心',
    disabled: false,
    to: '/setting',
  },
  {
    title: '物資管理',
    disabled: true,
  }
])


const tab = ref('option-1');
const drawerOpen = ref(false);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};


const isFavorite = ref('true');
const events=ref([])
const fetchFavoriteEventDetails = async () => {
  try {
    // 獲取用戶收藏的活動列表
    const { data } = await apiAuth.get('/user/mark');
    // 將每個活動標記為已收藏
    events.value = data.map(event => ({ ...event, isFavorite: true }));
  } catch (error) {
    console.error('Failed to fetch favorite event details:', error);
  }
};

const toggleFavorite = async (eventId) => {
  try {
    await apiAuth.patch('/user/mark', { eventId });

    // 更新本地狀態，移除已取消收藏的活動
    events.value = events.value.filter(e => e._id !== eventId);

    // 如果希望在用戶取消收藏後，該活動立即從頁面上移除，則應使用 filter 方法來過濾掉該活動。
    // 如果只是想更新活動的收藏狀態，而保持它在列表中(標記為已收藏或已取消收藏)，則應使用 find 方法。
    // const event = events.value.find(e => e._id === eventId);
    // if (event) {
    //   event.isFavorite = isFavorite;
    // }


    createSnackbar({
      text: '取消收藏',
      snackbarProps: {
        color: 'info'
      }
    });
  } catch (error) {
    console.error('取消收藏失败', error);
    createSnackbar({
      text: '取消收藏失败',
      snackbarProps: {
        color: 'red',
      }
    });
  }
};

onMounted(() => {
  fetchFavoriteEventDetails();
});


const subTab = ref('find')
const replayTab = ref('findReplay')
const showTabs = ref(false);
const smDrawerOpen = ref(false);

const smToggleDrawer = () => {
  smDrawerOpen.value = !smDrawerOpen.value;
};

const clickTab = () => {
  showTabs.value = !showTabs.value;
};











</script>
  
<style scoped>
 .b-1{
  border: 1px solid #7a7a7a;
}
.bb-1{
  border-bottom: 1px solid #7a7a7a;
}
.v-data-table__thead{
  background-color:#000;
  font-size: 15px;
}

::v-deep .v-data-table__thead{
  background: #D9D9D9
}

.form-label{
    font-size: 20px;
    font-weight: bold;
}
.bg-info {
  background-color: #2196F3;
}
.bg-red {
  background-color: #F5B4B4;
}

.v-container{
  margin:0 auto;
}
.mark-container{
  width: 100%;
}
.group-container{
  width:100%;
}

 .mark-btn{
  width:"10px";
  height:"35px";
 }
.tabs-hidden {
    display: none;
}

.tabs-visible {
    display: block;
}
.v-card-title{
  font-size: 16px;
}
.v-card-subtitle{
  font-size: 14px;
}
.mark-image{
      width: 100%;
      min-width: 120px;
      max-height: 150px;
      min-height: 150px;
}
@media(min-width:600px){
  .mark-container{
    width: 87%;
  }
  .group-container{
    width: 95%;
  }
  .mark-image{
      width: 100%;
      height: 80%;
      max-height: 185px;
      min-height: 145px;
}
}@media(min-width:750px) and (max-width: 959px) {
  .mark-container{
    width: 80%;
  }
  .v-card-title{
  font-size: 18px;
  }
  .v-card-subtitle{
    font-size: 16px;
  }
}
@media(min-width:960px){
  .mark-container{
    width: 75%;
  }
  .group-container{
    width: 90%;
  }
  .v-card-title{
  font-size: 18px;
  }
  .v-card-subtitle{
    font-size: 16px;
  }
}
@media(min-width:1280px){
  .mark-container{
    width: 70%;
  }
  .group-container{
    width: 87%;
  }
}
@media(min-width:1920px){
  .mark-container{
    width: 45%;
  }
  .group-container{
    width: 70%;
  }
}
</style>
  








  