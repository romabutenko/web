<template>
  <div class="app-container">
    <h1>P&L Report</h1>
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <tab-pane v-if="activeName === item.key" :type="item.key" @create="showCreatedTimes" />
        <el-table
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            v-for="column in tableColumns"
            :key="column.property"
            :prop="column.property"
            :label="column.label"
            :width="column.width"
          />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'PNL',
  data() {
    return {
      tabMapOptions: [
        { label: 'Рубли', key: 'abs' },
        { label: 'Руб / час', key: 'tariff' }
      ],
      activeName: 'CN',
      createdTimes: 0,
      tableColumns: [
        {
          fixed: false,
          label: 'Дата',
          property: 'date',
          width: 200
        },
        {
          fixed: false,
          label: 'Имя',
          property: 'name',
          width: 200
        },
        {
          fixed: false,
          label: 'Адрес',
          property: 'address',
          width: 200
        }
      ],
      tableData: {
        abs: [
          {
            date: '2016-05-02',
            name: 'Kolya',
            address: 'Kyiv'
          }
        ]
      }
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>

</style>
