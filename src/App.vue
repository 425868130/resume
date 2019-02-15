<template>
  <div id="app" class="root">
    <Row>
      <!-- 个性签名部分 -->
      <Row class="signatrue">
        <Col class="sign-text"  :xs="{span:22,offset:2}" :lg="{span:10,offset:6}">不曾执着追求，就别无谓奢望</Col>

      </Row>
    </Row>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.root {
  background-color: rgb(30, 36, 60);
}
.signatrue {
  position: absolute;
  z-index: 99;
  float: left;
  top: 80px;
  width: 100%;
}
</style>
