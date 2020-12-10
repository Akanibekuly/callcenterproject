<template>
  <div style="width: 600px">
    <div class="table" v-show="show">
        <table>
            <tr>
                <th>Агент</th>
                <th>Всего Звонков</th>
                <th>Среднее время звонков</th>
                <th>Общее время звонков</th>
                <th>Первым Завершен Оперотором</th>
                <th>Первым завершен звонящим</th>
                <th>Пропущено Оперотором</th>
                <th>Завершен Клиентом</th>
            </tr>
            <tr v-for="operator in operators" :key="operator.callid">
                <td><strong><font-awesome-icon :icon="['fas', 'headset']" /></strong>{{ operator.SipNumber }} </td>
                <td><strong class="blue"><font-awesome-icon :icon="['fas', 'phone-volume']" /></strong>{{ operator.TotalCalls }} </td>
                <td><strong><font-awesome-icon :icon="['fas', 'clock']" /></strong>{{  secondsToHms(operator.AvgCallDuration) }} </td>
                <td><strong><font-awesome-icon :icon="['fas', 'clock']" /></strong>{{  secondsToHms(operator.TotalCallDuration) }} </td>
                <td><strong class="green"><font-awesome-icon :icon="['fas', 'headset']" /></strong>{{ operator.OperatorDropCallsCount }} </td>
                <td><strong class="green"><font-awesome-icon :icon="['fas', 'user']" /></strong>{{ operator.AgentDropCallsCount }} </td>
                <td><strong class="red"><font-awesome-icon :icon="['fas', 'phone-slash']" /></strong>
                    <strong class="red">  <font-awesome-icon :icon="['fas', 'headset']" /> </strong>
                {{ operator.MissedByOperatorCallsCount }} </td>
                <td><strong class="red"><font-awesome-icon :icon="['fas', 'phone-slash']" /></strong>
                    <strong class="red">  <font-awesome-icon :icon="['fas', 'user']" /> </strong>
                {{ operator.MissedByAgentCallsCount }} </td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheOperatorTable',
  props:["operators", "show"],
  methods: {
    secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return h +":"+ m +":"+ s; 
}
  }
}

</script>

<style scoped>

table {
  position: relative;
  top: 10px;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  font-size: 12px;
  width: 80vw;
  color: black;
}
strong {
    padding: 8px;
}
td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.red {
    color : red;
}
.green {
    color: green;
}
.blue {
    color: blue;
}
</style>