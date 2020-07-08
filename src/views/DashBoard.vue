<template>
    <v-row>
        <v-col cols = "2">
            <SidePanel/>
        </v-col>

        <v-col cols = "10">
            <h1>Hello World</h1> 
        </v-col>
    </v-row>
</template>

<script>

import SidePanel from '@/components/SidePanel';

export default {
    name: 'DashBoard',
    components:{
        SidePanel
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
</style>