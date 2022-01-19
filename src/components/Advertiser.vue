<template>
  <div class="container">
    <div class="advertiser-details">
      <h1 class="title">{{ listing["listing"]["title"] }}</h1>
      <!-- <span>{{ listing["listing"]["adress"]["locationId"] }}</span> -->
      <p class="information">{{ listing["listing"]["description"] }}</p>

      <div class="control">
        <button class="btn">Saiba mais</button>
      </div>
    </div>
    <div class="advertiser-image">
      <img
        class="img"
        src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <div class="info">
        <h2 class="sub-title">Características do imóvel</h2>
        <ul>
          <li>
            <strong>Quartos : </strong>{{ listing["listing"]["bedrooms"][0] }}
          </li>
          <li>
            <strong>Banheiros : </strong
            >{{ listing["listing"]["bathrooms"][0] }}
          </li>
          <li>
            <strong>Suítes: </strong>{{ listing["listing"]["suites"][0] }}
          </li>
          <li>
            <strong>Garagem: </strong
            >{{ listing["listing"]["parkingSpaces"][0] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertiser",

  props: {
    listing: Object,
  },
};
</script>

<style scoped>
.container {
  width: 60%;
  height: 350px;
  margin: 1rem auto;
  border: none;
  border-radius: 6px;
  box-shadow: 0 10px 20px 1px grey;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
}

.advertiser-details {
  position: relative;
  float: left;
  width: 40%;
  height: 100%;
  padding: 30px;
  text-align: left;
  overflow: hidden;
}

.title {
  display: inline-block;
  position: relative;
  font-size: 24px;
  color: #344055;
  margin: 0;
}

.advertiser-details > p {
  /* text-align: center; */
  font-size: 18px;
  color: #7d7d7d;
  height: 38%;
  overflow: hidden;
}

.control {
  position: absolute;
  bottom: 20%;
  left: 30%;
}

.btn {
  position: relative;
  padding: 10px;
  margin: 0;
  background: #809fff;
  color: #eee;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transform: translateY(0px);
  transition: 0.3s linear;
}

.btn:hover {
  transform: translateY(-6px);
  background: #1a66ff;
}

.advertiser-image {
  position: relative;
  float: right;
  width: 45%;
  height: 100%;
  /* display: inline-block; */
  overflow: hidden;
  transition: all 0.3s ease-out;
}

.img {
  width: 100%;
  height: 100%;
}

.info {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(27, 26, 26, 0.6);
  color: #fff;
  text-align: left;
  line-height: 1.8;
  cursor: no-drop;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
}

.sub-title {
  text-align: center;
}
.advertiser-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}

.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.advertiser-image:hover img {
  transition: all 0.3s ease-out;
  transform: scale(1.2, 1.2);
}
</style>
