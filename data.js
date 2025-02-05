var APP_DATA = {
  "scenes": [
    {
      "id": "0-nappali",
      "name": "Nappali",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.116952897247142,
        "pitch": -0.027688520335736655,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": -2.699208324032039,
          "pitch": -0.003926022419520336,
          "rotation": 0,
          "target": "3-kandallo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-furdo1",
      "name": "Furdo1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1166460202840316,
          "pitch": 0.19671073056740518,
          "rotation": 0,
          "target": "2-furdo2"
        },
        {
          "yaw": 2.366460252639488,
          "pitch": 0.09323127473763648,
          "rotation": 0,
          "target": "3-kandallo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-furdo2",
      "name": "Furdo2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.8780348698494631,
        "pitch": 0.27134749929019364,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": 0.9596690741211908,
          "pitch": 0.19944267109174163,
          "rotation": 0,
          "target": "1-furdo1"
        },
        {
          "yaw": 2.0743039286235545,
          "pitch": 0.21600228283400646,
          "rotation": 0,
          "target": "3-kandallo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kandallo",
      "name": "Kandallo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.7632941425140682,
        "pitch": 0.019673789358552796,
        "fov": 1.3991932276324333
      },
      "linkHotspots": [
        {
          "yaw": 2.2297643459748304,
          "pitch": -0.031143700692116028,
          "rotation": 0,
          "target": "1-furdo1"
        },
        {
          "yaw": -2.601832882696961,
          "pitch": 0.009585277315858676,
          "rotation": 0,
          "target": "0-nappali"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Itthon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
