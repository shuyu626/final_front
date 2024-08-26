<template>
<!-- 留言板 -->
<v-row class="mt-10">
            <v-col>
                <div class="b-1 info-margin  text-center text-body-1 pa-2 bg-accent rounded-t-lg font-weight-bold" style="width:150px;padding: 0;border-bottom: 0px;">留言板</div>
                <div class="b-1 pa-5 info-margin">
                  <v-row v-for="msg in message" :key="msg._id" >
                  <div class="pa-4 ">
                      <v-avatar color="primary b-1" class="me-3" size="large">
                          <v-img :src="msg.user.avatar || 'default-avatar-url'"></v-img>
                      </v-avatar>
                      <span class="ml-1">{{ msg.user.username }}</span>
                      <p class="ml-16 text-body-2">{{ msg.content }}</p>
                  </div>
                </v-row>
                <!-- 當沒有留言時顯示提示訊息 -->
                 <v-row class="my-10">
                  <div v-if="message.length === 0" class="text-center text-body-2 mt-4 mx-auto ">
                    <h1 style="color:#bfbfbf;" class="mb-15">
                      目前暫無任何留言
                    </h1>
                  </div>
                
                  <v-divider></v-divider>
                </v-row>
                <!-- 留言發布 -->
                 <v-row class="my-2">
                <div class="pa-4">
                    <v-form @submit.prevent="submit" :disabled="isSubmitting">
                        <v-textarea 
                        ref="commentInput"
                        v-model="comment.value.value"
                        :error-messages="comment.errorMessage.value"
                        placeholder="請輸入您的留言或提問"
                        variant="outlined" 
                        width="600" 
                        maxlength="20" 
                        counter
                        >
                            <template v-slot:prepend v-for="file in files">
                            <v-avatar color="primary " class="me-1 b-1" size="large">
                                <v-img :src="file.avatar"></v-img>
                            </v-avatar>
                            </template>
                        </v-textarea>
                        <v-btn
                        type="submit"
                        variant="text"
                        class="rounded-md b-1 bg-accent mt-2"
                        density="comfortable"
                        :ripple="false"
                        >送出</v-btn>
                </v-form>
                </div>
                </v-row>
            </div>
            </v-col>
        </v-row>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRoute } from 'vue-router'
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const route = useRoute()


const schema = yup.object({
  comment: yup
    .string()
    .required('留言內容必填'),
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    comment: ''
  }
})

const message = ref([])
const loadComments = async () => {
  try {
    const { data } = await apiAuth.get(`/comment/`+ route.params.id)
    console.log(data)
    message.value = data.result
    console.log(message.value[0].user.username)
    
  } catch (error) {
    console.log(error)
    // createSnackbar({
    //   text: error?.response?.data?.message || '無法獲取留言',
    //   snackbarProps: {
    //     color: 'red'
    //   }
    // })
  }
}

onMounted(() => {
  loadComments()
})




const comment = useField('comment')
const submit = handleSubmit(async (values) => {
  try {
    const data = {
        content:values.comment,
        materialId: route.params.id
    }
    
    console.log(data)
    await apiAuth.post('comment/', data) 
    createSnackbar({
      text: '新增成功' ,
      snackbarProps: {
        color: 'green'
      }
    })
    resetForm()
    loadComments()
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const files = ref([])
const loadfile = async () => {
  try {
    const { data } = await apiAuth.get('/user/profile');
    files.value = [data.result];

    console.log(files.value)
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red',
      },
    });
  }
};
loadfile();


</script>
<style scoped>
.b-1{
  border: 1px solid #7a7a7a;
}

.info-margin{
    margin: 0 6rem 0 6rem ;
}
.v-btn{
    position: relative;
    left: 89%;
}
</style>