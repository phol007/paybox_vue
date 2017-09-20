<template>
  <div id="app">

    <nav class="navbar">
      <div class="head-left">
          <img src="./assets/logo_paybox.png" v-touch:hold.prevenDefualt="inputPassword">
      </div>
      <div class="head-right">
        <span>Time {{ time }} น.</span>
        <audio id="audio" :src="file1" ></audio>
      </div> 
    </nav>
    <router-view></router-view>

    <footer class="fot">      
      <marquee name="status" style="width:80%; float:left;">
        ** โปรแกรมพร้อมใช้งานแล้ว [ ทดสอบสั่งซื้อสินค้าไปแล้ว {{ sale }} รายการ ] {{ screen }}
      </marquee>
      <div class="fstatus">
        <img src="./assets/status/3g.png" width="30" style="margin: 2% 5%;">
        <img src="./assets/status/ship.png" width="30" style="margin: 2% 5%;">
        <img src="./assets/status/ws_logo.png" width="30" style="margin: 2% 5%;">
      </div>
    </footer>

    <!-- modal setting -->
    <div class="modal" id="setting">
      <div class="modal-background"></div>
      <div class="modal-content">
        <input type="password" class="setting_input" id="PasswordKey" readonly="true" maxlength="13" size="13">
        <button class="button is-info bt-setting" @click="addKey(1)">1</button>
        <button class="button is-info bt-setting" @click="addKey(2)">2</button>
        <button class="button is-info bt-setting" @click="addKey(3)">3</button>
        <button class="button is-info bt-setting" @click="addKey(4)">4</button>
        <button class="button is-info bt-setting" @click="addKey(5)">5</button>
        <button class="button is-info bt-setting" @click="addKey(6)">6</button>
        <button class="button is-info bt-setting" @click="addKey(7)">7</button>
        <button class="button is-info bt-setting" @click="addKey(8)">8</button>
        <button class="button is-info bt-setting" @click="addKey(9)">9</button>
        <button class="button is-info bt-setting" @click="addKey(0)">0</button>
        <button class="button is-info bt-setting" @click="removeKey">Del</button>
        <button class="button is-info bt-setting" @click="gotoSetting">Go!</button>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
    <!-- modal setting -->
  </div>
</template>

<script src="./js/app.js"></script>
