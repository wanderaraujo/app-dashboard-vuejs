<template>
  <aside>
    <div class="info-boxes other-info">
      <ul>
        <li>Company Spend History</li>
        <li>
          <Chart :height="200" />
        </li>
      </ul>
    </div>
    <div class="info-boxes other-info">
      <ul>
        <li>Company Spend History</li>
        <li>
          <div class="service-description">
            <img src="@/assets/service/google-cloud.jpg" />
            <span>Google Cloud Platform,</span>
            <p for="">Microsoft spend on product $500,000</p>
          </div>
          <div class="service-description">
            <img alt="Logo" src="@/assets/service/century.jpg" />
            <span>CenturyLink CDN,</span>
            <p for="">Microsoft spend on product $300,000</p>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
li {
  background-color: #ffffff;
  border: 1px solid #d4d9e3;
  padding: 10px;
}

li > div:last-child {
  padding-bottom: 20px;
}

.service-description {
  display: list-item;
  align-items: center;
  padding-top: 20px;
}

.service-description > img {
  width: 16%;
  border-radius: 8px;
  border: 1px solid #ced2e0;
  padding: 7px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  float: left;
  margin-right: 20px;
  text-align: center;
}

.name-company {
  font-size: 33px;
  display: contents;
}

.service-description > span {
  font-size: 18px;
  color: #5d699a;
}

.service-description > p {
  font-size: 18px;
  padding-left: 19px;
}
</style>
