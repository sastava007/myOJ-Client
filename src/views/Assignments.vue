<template>
    <v-row>
        <v-col cols = "2">
            <SidePanel/>
        </v-col>

        <v-col cols = "10">
            <NewAssignment/>
        </v-col>
    </v-row>
</template>

<script>
import SidePanel from '@/components/SidePanel';
import NewAssignment from '@/components/NewAssignment';

export default {
    name: 'Assignments',
    components:{
        SidePanel,
        NewAssignment
    }
}
</script>