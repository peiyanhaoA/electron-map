<template>
  <div id="map"></div>
</template>
<script>
export default {
  mounted () {
        var sContent = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>";
        var map = new BMap.Map("map");  // 创建Map实例
        map.centerAndZoom("南京市迈皋桥燕街升园小区", 19);  // 初始化地图,设置中心点坐标和地图级别
        map.addEventListener("click", function(e){    
            alert(e.point.lng + ", " + e.point.lat)
        });
        // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩
        var b = new BMap.Bounds(new BMap.Point(118.862024, 32.120471),new BMap.Point(118.87037, 32.11356));
        try {
            BMapLib.AreaRestriction.setBounds(map, b); // 已map为中心，已b为范围的地图
        } catch (e) {
            alert(e);
        }

        var infoWindow = new BMap.infoWindow(sContent);

        var pointArr = [
            {lng:118.866035 , lat:32.118212},
            {lng:118.866408 , lat:32.117792},
            {lng:118.866875 , lat:32.117363},
            {lng:118.867266 , lat:32.117061},
            {lng:118.865416 , lat:32.117826},
            {lng:118.866089 , lat:32.117268},
            {lng:118.866574 , lat:32.11671},
            {lng:118.864899 , lat:32.117268},
            {lng:118.865429 , lat:32.116656}
        ];
        pointArr.forEach(function(e) {
            var marker = new BMap.Marker(new BMap.Point(e.lng, e.lat));
            map.addOverlay(marker);
        });
       
    }
  
}
</script>
<style>
    #map {
        width: 100%;
        height: 100%;
        overflow: hidden;
        margin:0;
        font-family:"微软雅黑";
    }
</style>

