<template>
  <div id="app">

    <nav class="navbar">
      <div class="head-left">
          <img src="./assets/logo_paybox.png">
      </div>
      <div class="head-right">
        <span>Time {{ time }} น.</span>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="fot">
      <marquee name="status" style="width:80%; float:left;">
        ** โปรแกรมพร้อมใช้งานแล้ว [ ทดสอบสั่งซื้อสินค้าไปแล้ว {{ sale }} รายการ ]
      </marquee>
      <div class="fstatus">
        <img src="./assets/status/3g.png" width="30" style="margin: 2% 5%;">
        <img src="./assets/status/ship.png" width="30" style="margin: 2% 5%;">
        <img src="./assets/status/ws_logo.png" width="30" style="margin: 2% 5%;">
      </div>
    </footer>

  </div>
</template>

<script src="./js/app.js"></script>
