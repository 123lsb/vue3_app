<template>
    <div>
     
      
        <headers></headers>
           <Food></Food>
           <button @click="sendUrl">登录</button>
    </div>
</template>
<script>
import headers from '@/components/header/header.vue'
import Food from '@/components/food/food.vue'
export default {
 components: {
    headers,
    Food
    },
    data() {
        return {
            
        }
    },
    
    methods:{
       sendUrl(){
        this.$router.push('/login')
       } 
    },
    created(){
        
    },
}
</script>
<style lang="less" scoped>
    
</style>