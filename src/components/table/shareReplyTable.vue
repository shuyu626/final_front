<template>
  <div class="b-1 mx-auto my-8 share-container" >
    <h2 class="bb-1 bg-accent text-center mx-auto py-1 mb-5">索取者聯絡資訊</h2>
    <!-- 物資回覆管理 -->
            <v-data-table-server
                v-model:items-per-page="tableItemsPerPage"
                v-model:sort-by="tableSortBy"
                v-model:page="tablePage"
                :items="tableItems"
                :headers="tableHeaders"
                :loading="tableLoading"
                :items-length="tableItemsLength"
                @update:items-per-page="tableLoadItems(false)"
                @update:sort-by="tableLoadItems(false)"
                @update:page="tableLoadItems(false)"
                hover
                class="mx-auto mb-15 px-2 px-md-8 text-body-1 rounded-sm"
              >
              <template #[`item.image`]="{ item }" >
                <router-link :to="'/material/share/'+ item._id" style="text-decoration: none">
                  <v-img :src="item.image"  class="my-5 img"></v-img>
                </router-link>
              </template>
              <template #[`item.donations`]="{ item }">
                <v-card class="mb-2" outlined variant="text" v-for="(donation, index) in item.donations" :key="index" >
                  <v-card-title>
                    <v-row no-gutters class="flex-column ">
                      <v-col cols="3" class="form-label text-left my-1">數量: {{ donation.quantity }}</v-col>
                      <v-col cols="5" class="form-label text-left my-1">服務單位: {{ donation.donator }}</v-col>
                      <v-col cols="4" class="form-label text-left my-1">聯絡電話: {{ donation.phone }}</v-col>
                    </v-row>
                  </v-card-title>
                </v-card>
            </template>
            </v-data-table-server>
</div>

</template>
<script setup>
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'

const { api,apiAuth } = useApi()
const createSnackbar = useSnackbar()




// 我的募集物資管理
const tableItemsPerPage = ref(8)
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
const tablePage = ref(1)
const tableItems = ref([])
const tableHeaders = [
  { title: '物資', align: 'center', sortable: false, key: 'image' },
  { title: '索取者聯絡資訊', align: 'center', sortable: false, key: 'donations' }
  // { title: '捐贈數量', align: 'center', sortable: false, key: 'donations[0].quantity' },
  // { title: '單位名', align: 'center', sortable: false, key: 'donations[0].donator' },
  // { title: '聯絡電話', align: 'center', sortable: false, key: 'donations[0].phone' }
]
const tableLoading = ref(true)
const tableItemsLength = ref(0)
const tableLoadItems = async (reset) => {
  if (reset) tablePage.value = 1
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/user/share', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order || 'desc',
      }
    })
  // 確認 data.result.data 裡的 donations 是否有東西，有東西才顯示在畫面上
  const filteredData = data.result.data.filter(item => item.donations && item.donations.length > 0)    
    tableItems.value.splice(0, tableItems.value.length, ...filteredData)
    tableItemsLength.value = filteredData.length
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
  tableLoading.value = false
}
tableLoadItems()




</script>
<style scoped>
.b-1{
  border: 1px solid #838383;
}
.bb-1{
  border-bottom: 1px solid #7a7a7a;
}
.img{
  min-width: 115px;
  max-width: 250px;
  min-height: 80px;
  max-height: 140px;
}
.share-container{
  width: 100%;
}
.form-label{
  font-size: 14px;
  font-weight: bold;
}
::v-deep .v-data-table__thead{
  background: #D9D9D9;
  font-size: 16px;
  font-weight: bold;
}
@media(min-width:600px){
  .share-container{
    width: 95%;
  }
  .form-label{
    font-size: 16px;
    font-weight: bold;
  }
}
@media(min-width:960px){
  .share-container{
    width: 90%;
  }
}
@media(min-width:1280px){
  .share-container{
    width: 87%;
  }
}
@media(min-width:1500px){
  .share-container{
    width: 85%;
  }
}
@media(min-width:1920px){
  .share-container{
    width: 70%;
  }
}
</style>