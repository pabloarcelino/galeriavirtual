TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "SALA",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "class": "Panorama",
     "partial": false,
     "label": "CORREDOR",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "label": "QUARTO",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
          "class": "AdjacentPanorama",
          "backwardYaw": 100.01,
          "yaw": 53.81,
          "distance": 1
         }
        ],
        "id": "panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_r_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_f_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_b_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_u_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "overlays": [
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 8.94,
            "id": "overlay_BDAD266D_B7EA_1164_41E4_097C0DFBB93F",
            "bleaching": 0.7,
            "yaw": 172.74
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": -2.68,
            "id": "overlay_BDA82C27_B7EA_10E3_41DB_7D7E8F8AF5D2",
            "bleaching": 0.7,
            "yaw": 158.07
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": -15.41,
            "id": "overlay_BDBE8B82_B7EA_379D_41C1_5D65463D8B2A",
            "bleaching": 0.7,
            "yaw": 142.86
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": -29.52,
            "id": "overlay_BDBA10C1_B7EA_119C_41D1_943190FD1D0F",
            "bleaching": 0.7,
            "yaw": 125.71
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": -50.82,
            "id": "overlay_BD4FECB7_B7EA_11E4_41D6_459A815CA5E9",
            "bleaching": 0.7,
            "yaw": 102.19
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BAE17055_B09E_10A4_41D8_2D4EE4D53C19",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_0_HS_0_0.png",
                 "height": 95,
                 "class": "ImageResourceLevel",
                 "width": 121
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 9.86,
              "pitch": -43.7,
              "yaw": 53.81
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_BB081C79_B096_116F_41B7_83600E66481A, this.camera_A79DD81B_B1B6_10AC_41E2_3AB83FBFEDAE); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_0_HS_0_0_0_map.gif",
                 "height": 47,
                 "class": "ImageResourceLevel",
                 "width": 60
                }
               ]
              },
              "pitch": -43.7,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 53.81,
              "hfov": 9.86
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_d_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_l_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 53.81,
       "yaw": 100.01,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "label": "QUARTO SU\u00cdTE",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "hfovMax": 120,
           "class": "Panorama",
           "partial": false,
           "label": "BANHEIRO SU\u00cdTE",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5",
             "class": "AdjacentPanorama",
             "backwardYaw": -10.58,
             "yaw": 105.28,
             "distance": 1
            }
           ],
           "id": "panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_r_hq.jpeg",
                "height": 1016,
                "class": "ImageResourceLevel",
                "width": 1016
               }
              ]
             },
             "front": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_f_hq.jpeg",
                "height": 1016,
                "class": "ImageResourceLevel",
                "width": 1016
               }
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_b_hq.jpeg",
                "height": 1016,
                "class": "ImageResourceLevel",
                "width": 1016
               }
              ]
             },
             "top": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_u_hq.jpeg",
                "height": 1016,
                "class": "ImageResourceLevel",
                "width": 1016
               }
              ]
             },
             "overlays": [
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": -8.21,
               "id": "overlay_BF75D2C1_B7F6_719C_41C7_C06694D450E3",
               "bleaching": 0.7,
               "yaw": 86.97
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": -32.01,
               "id": "overlay_BF72D476_B7F6_7165_41B6_4BB3994821AD",
               "bleaching": 0.7,
               "yaw": 75.35
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": -59.39,
               "id": "overlay_BF732641_B7F6_709F_41E3_1E1C95B14B29",
               "bleaching": 0.7,
               "yaw": 64.01
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_BAF1A019_B09E_10AC_41D4_6ECA7D3A26F8",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_0_HS_0_0.png",
                    "height": 299,
                    "class": "ImageResourceLevel",
                    "width": 394
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 12.85,
                 "pitch": -73.16,
                 "yaw": 105.28
                }
               ],
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5, this.camera_A6869913_B1B6_10A3_41D1_12C6639E9408); this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_0_HS_0_0_0_map.gif",
                    "height": 149,
                    "class": "ImageResourceLevel",
                    "width": 197
                   }
                  ]
                 },
                 "pitch": -73.16,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 105.28,
                 "hfov": 12.85
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_d_hq.jpeg",
                "height": 1016,
                "class": "ImageResourceLevel",
                "width": 1016
               }
              ]
             },
             "left": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_l_hq.jpeg",
                "height": 1016,
                "class": "ImageResourceLevel",
                "width": 1016
               }
              ]
             },
             "thumbnailUrl": "media/panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 105.28,
          "yaw": -10.58,
          "distance": 1
         },
         {
          "panorama": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
          "class": "AdjacentPanorama",
          "backwardYaw": 91.99,
          "yaw": -61.42,
          "distance": 1
         }
        ],
        "id": "panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_r_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_f_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_b_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_u_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BABD9775_B09A_FF67_419A_1DFEBDD35DED",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_0_HS_1_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 131
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.02,
              "pitch": -57.01,
              "yaw": -10.58
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824, this.camera_A6B5F8EE_B1B6_1165_41E3_2BAD6E01A3D6); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_0_HS_1_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ]
              },
              "pitch": -57.01,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -10.58,
              "hfov": 8.02
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BAF00FAA_B09A_0FED_41E0_6C00847639FE",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_0_HS_0_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 131
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.31,
              "pitch": -45.6,
              "yaw": -61.42
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_BB081C79_B096_116F_41B7_83600E66481A, this.camera_A6B188FA_B1B6_116D_41C7_EE92285C0B00); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_0_HS_0_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ]
              },
              "pitch": -45.6,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -61.42,
              "hfov": 10.31
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_d_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_l_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -61.42,
       "yaw": 91.99,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "label": "BANHEIRO SOCIAL",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
          "class": "AdjacentPanorama",
          "backwardYaw": 84.59,
          "yaw": 87.65,
          "distance": 1
         }
        ],
        "id": "panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_r_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_f_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_b_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_u_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BAEA9806_B09E_10A5_41C4_2E4689E5CA97",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_0_HS_0_0.png",
                 "height": 257,
                 "class": "ImageResourceLevel",
                 "width": 268
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.55,
              "pitch": -75.53,
              "yaw": 87.65
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_BB081C79_B096_116F_41B7_83600E66481A, this.camera_A6BD7907_B1B6_10A3_41C4_9F351FFE434D); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_0_HS_0_0_0_map.gif",
                 "height": 128,
                 "class": "ImageResourceLevel",
                 "width": 134
                }
               ]
              },
              "pitch": -75.53,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 87.65,
              "hfov": 7.55
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_d_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_l_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 87.65,
       "yaw": 84.59,
       "distance": 1
      },
      {
       "panorama": {
        "hfovMax": 120,
        "class": "Panorama",
        "partial": false,
        "label": "COZINHA E \u00c1REA DE SERVI\u00c7O",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
          "class": "AdjacentPanorama",
          "backwardYaw": -8.85,
          "yaw": -151.12,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E",
          "class": "AdjacentPanorama",
          "backwardYaw": 17.56,
          "yaw": -142,
          "distance": 1
         }
        ],
        "id": "panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_r_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "front": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_f_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_b_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "top": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_u_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "overlays": [
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 2.58,
            "id": "overlay_BF77FB17_B7F6_30A4_41D9_A551081CEAC3",
            "bleaching": 0.7,
            "yaw": 44.92
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": -26.75,
            "id": "overlay_BF73233B_B7F6_10E3_41E0_B22D5855532C",
            "bleaching": 0.7,
            "yaw": 48.52
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": -58.29,
            "id": "overlay_BF705691_B7F6_11BF_41E4_34B56AB58650",
            "bleaching": 0.7,
            "yaw": 51.01
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BAE792C5_B09E_71A7_41CA_DA302EE645B1",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_0_HS_2_0.png",
                 "height": 106,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 14.74,
              "pitch": -26.82,
              "yaw": -142
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E, this.camera_A7E2D834_B1B6_10E4_41CF_2D48B186664E); this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_0_HS_2_0_0_map.gif",
                 "height": 53,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -26.82,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -142,
              "hfov": 14.74
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BB0C35EE_B09E_1365_41B4_ED6D081F20B7",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_0_HS_1_0.png",
                 "height": 115,
                 "class": "ImageResourceLevel",
                 "width": 131
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.65,
              "pitch": -43.73,
              "yaw": -151.12
             }
            ],
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_BB081C79_B096_116F_41B7_83600E66481A, this.camera_A7994829_B1B6_10EC_41C1_22646E6DC67F); this.mainPlayList.set('selectedIndex', 6)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_0_HS_1_0_0_map.gif",
                 "height": 57,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ]
              },
              "pitch": -43.73,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -151.12,
              "hfov": 10.65
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_d_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "left": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_l_hq.jpeg",
             "height": 1016,
             "class": "ImageResourceLevel",
             "width": 1016
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -151.12,
       "yaw": -8.85,
       "distance": 1
      },
      {
       "panorama": "this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E",
       "class": "AdjacentPanorama",
       "backwardYaw": 35.78,
       "yaw": -127.47,
       "distance": 1
      }
     ],
     "id": "panorama_BB081C79_B096_116F_41B7_83600E66481A",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_r_hq.jpeg",
          "height": 1016,
          "class": "ImageResourceLevel",
          "width": 1016
         }
        ]
       },
       "front": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_f_hq.jpeg",
          "height": 1016,
          "class": "ImageResourceLevel",
          "width": 1016
         }
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_b_hq.jpeg",
          "height": 1016,
          "class": "ImageResourceLevel",
          "width": 1016
         }
        ]
       },
       "top": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_u_hq.jpeg",
          "height": 1016,
          "class": "ImageResourceLevel",
          "width": 1016
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BA6762AD_B096_11E4_41D1_7162934DC111",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_4_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 106
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 9.88,
           "pitch": -34.41,
           "yaw": 84.59
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176, this.camera_A55D289A_B1B6_11AD_41D0_0209D8F9161C); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_4_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 53
             }
            ]
           },
           "pitch": -34.41,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 84.59,
           "hfov": 9.88
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BAC8C179_B09A_736C_4191_6B279A77EBCA",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_3_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 118
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.03,
           "pitch": -34.31,
           "yaw": 100.01
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB, this.camera_A7EFA840_B1B6_109C_41C7_153F1C6E3A8F); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_3_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 59
             }
            ]
           },
           "pitch": -34.31,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 100.01,
           "hfov": 11.03
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BAC65FDB_B09A_0FA3_41D3_66272E237749",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_2_0.png",
              "height": 68,
              "class": "ImageResourceLevel",
              "width": 116
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.42,
           "pitch": -29.19,
           "yaw": 91.99
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5, this.camera_A551B885_B1B6_11A4_41E1_CE46C93F776E); this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_2_0_0_map.gif",
              "height": 34,
              "class": "ImageResourceLevel",
              "width": 58
             }
            ]
           },
           "pitch": -29.19,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 91.99,
           "hfov": 11.42
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BAE6D606_B09A_30A5_41C9_86110E5C3519",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_1_0.png",
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 131
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.8,
           "pitch": -42.9,
           "yaw": -8.85
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1, this.camera_A55D58A8_B1B6_11ED_41C3_3A430DF5D7BF); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_1_0_0_map.gif",
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ]
           },
           "pitch": -42.9,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -8.85,
           "hfov": 10.8
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BB553F96_B09A_0FA4_41D2_A5F245F00C00",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_0_0.png",
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 131
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.64,
           "pitch": -37.85,
           "yaw": -127.47
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E, this.camera_A6A408BF_B1B6_11E3_41B2_77F139967B49); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_0_HS_0_0_0_map.gif",
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ]
           },
           "pitch": -37.85,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -127.47,
           "hfov": 11.64
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_d_hq.jpeg",
          "height": 1016,
          "class": "ImageResourceLevel",
          "width": 1016
         }
        ]
       },
       "left": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_l_hq.jpeg",
          "height": 1016,
          "class": "ImageResourceLevel",
          "width": 1016
         }
        ]
       },
       "thumbnailUrl": "media/panorama_BB081C79_B096_116F_41B7_83600E66481A_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -127.47,
    "yaw": 35.78,
    "distance": 1
   },
   {
    "panorama": "this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1",
    "class": "AdjacentPanorama",
    "backwardYaw": -142,
    "yaw": 17.56,
    "distance": 1
   }
  ],
  "id": "panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_r_hq.jpeg",
       "height": 1016,
       "class": "ImageResourceLevel",
       "width": 1016
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_f_hq.jpeg",
       "height": 1016,
       "class": "ImageResourceLevel",
       "width": 1016
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_b_hq.jpeg",
       "height": 1016,
       "class": "ImageResourceLevel",
       "width": 1016
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_u_hq.jpeg",
       "height": 1016,
       "class": "ImageResourceLevel",
       "width": 1016
      }
     ]
    },
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": -2.68,
      "id": "overlay_BF125BC5_B7E9_F7A7_41A2_EFBA023BBDA2",
      "bleaching": 0.7,
      "yaw": -156.76
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": -23.71,
      "id": "overlay_BF10D1D9_B7F6_13AF_41BA_AB2C2C0F4489",
      "bleaching": 0.7,
      "yaw": -142.65
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": -45.29,
      "id": "overlay_BF1E76CD_B7F6_11A4_41DA_3F8DCD54E72A",
      "bleaching": 0.7,
      "yaw": -126.61
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_BD9A3231_B7AE_70FF_41C6_62AA96F2382F",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_0_HS_2_0.png",
           "height": 94,
           "class": "ImageResourceLevel",
           "width": 89
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.63,
        "pitch": -30.99,
        "yaw": 35.78
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_BB081C79_B096_116F_41B7_83600E66481A, this.camera_A6A078CB_B1B6_11A3_41DC_930E4EBE9344); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_0_HS_2_0_0_map.gif",
           "height": 47,
           "class": "ImageResourceLevel",
           "width": 44
          }
         ]
        },
        "pitch": -30.99,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 35.78,
        "hfov": 8.63
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_BDB95FF0_B7AE_0F7D_41C2_FE91A45AEAFF",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_0_HS_1_0.png",
           "height": 93,
           "class": "ImageResourceLevel",
           "width": 119
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.38,
        "pitch": -23.24,
        "yaw": 17.56
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1, this.camera_A6AC28D7_B1B6_11A3_41DC_698138825EE5); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_0_HS_1_0_0_map.gif",
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "pitch": -23.24,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 17.56,
        "hfov": 12.38
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_d_hq.jpeg",
       "height": 1016,
       "class": "ImageResourceLevel",
       "width": 1016
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_l_hq.jpeg",
       "height": 1016,
       "class": "ImageResourceLevel",
       "width": 1016
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_t.jpg"
   }
  ]
 },
 {
  "buttonMoveRight": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "touchControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "buttonPause": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "toggle",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveDown": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonZoomOut": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonRestart": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "buttonPlayRight": {
   "backgroundOpacity": 0,
   "minHeight": 0,
   "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68.png",
   "borderSize": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "paddingTop": 0,
   "shadow": false,
   "transparencyActive": true,
   "rollOverIconURL": "skin/IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68_pressed.png",
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "id": "IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68",
   "borderRadius": 0,
   "paddingRight": 0
  },
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "displayPlaybackBar": true
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -77.46,
   "class": "PanoramaCameraPosition",
   "yaw": -1.38
  },
  "id": "panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_camera"
 },
 "this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "path": "shortest",
     "yawSpeed": 33.25,
     "targetPitch": -84.02,
     "targetYaw": -31.99,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -74.61,
   "class": "PanoramaCameraPosition",
   "yaw": -44.44
  },
  "id": "panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_camera"
 },
 "this.panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -81.89,
   "class": "PanoramaCameraPosition",
   "yaw": -44.27
  },
  "id": "panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_camera"
 },
 "this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -82.36,
   "class": "PanoramaCameraPosition",
   "yaw": -36.97
  },
  "id": "panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_camera"
 },
 "this.panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -80.78,
   "class": "PanoramaCameraPosition",
   "yaw": 9.96
  },
  "id": "panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_camera"
 },
 "this.panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": -81.61,
   "class": "PanoramaCameraPosition",
   "yaw": 26.01
  },
  "id": "panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_camera"
 },
 "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_BB081C79_B096_116F_41B7_83600E66481A_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "camera": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 0, 1)",
    "camera": "this.panorama_A7B6BEBA_AF9A_71ED_41E2_DB5D69DF366E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 1, 2)",
    "camera": "this.panorama_A784FD49_AFAA_F0AF_41C9_0E983B2D1CC5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 2, 3)",
    "camera": "this.panorama_A6A3CF77_AFBA_0F63_41E2_E8F64D9C5DAB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 3, 4)",
    "camera": "this.panorama_A57ADDB5_AFBA_13E4_41D9_45FD9430D0D1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 4, 5)",
    "camera": "this.panorama_A6D7159D_AFAA_13A7_41D6_EAF38007F824_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 5, 6)",
    "camera": "this.panorama_A5D71318_AFAA_70AD_41A9_2A2A9119F176_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist, 6, 0)",
    "camera": "this.panorama_BB081C79_B096_116F_41B7_83600E66481A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist"
 },
 {
  "scaleMode": "fit_inside",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_A69CF965_B19A_1367_41DD_BD07BEA979B8.png",
     "height": 729,
     "class": "ImageResourceLevel",
     "width": 932
    },
    {
     "url": "media/map_A69CF965_B19A_1367_41DD_BD07BEA979B8_lq.png",
     "height": 364,
     "class": "ImageResourceLevel",
     "grayscale": true,
     "width": 466
    }
   ]
  },
  "class": "Map",
  "initialZoomFactor": 1,
  "label": "PLANTA BAIXA 3D",
  "maximumZoomFactor": 1.2,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "height": 729,
  "minimumZoomFactor": 0.5,
  "id": "map_A69CF965_B19A_1367_41DD_BD07BEA979B8",
  "width": 932,
  "thumbnailUrl": "media/map_A69CF965_B19A_1367_41DD_BD07BEA979B8_t.png",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "movementMode": "constrained",
  "buttonZoomOut": "this.IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877",
  "viewerArea": "this.MapViewer",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "buttonZoomIn": "this.IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0"
 },
 {
  "items": [
   {
    "media": "this.map_A69CF965_B19A_1367_41DD_BD07BEA979B8",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "class": "PlayList",
  "id": "playList_A789F807_B1B6_10A3_41E1_0736C81458FC"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -79.99
  },
  "id": "camera_A79DD81B_B1B6_10AC_41E2_3AB83FBFEDAE"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 171.15
  },
  "id": "camera_A7994829_B1B6_10EC_41C1_22646E6DC67F"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -162.44
  },
  "id": "camera_A7E2D834_B1B6_10E4_41CF_2D48B186664E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -126.19
  },
  "id": "camera_A7EFA840_B1B6_109C_41C7_153F1C6E3A8F"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "path": "shortest",
     "yawSpeed": 216,
     "targetPitch": -74.61,
     "targetYaw": -44.44,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 108
    },
    {
     "path": "shortest",
     "yawSpeed": 33.25,
     "targetPitch": -84.02,
     "targetYaw": -31.99,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 118.58
  },
  "id": "camera_A551B885_B1B6_11A4_41E1_CE46C93F776E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -92.35
  },
  "id": "camera_A55D289A_B1B6_11AD_41D0_0209D8F9161C"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "path": "shortest",
     "yawSpeed": 33.25,
     "targetPitch": -82.36,
     "targetYaw": -36.97,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 28.88
  },
  "id": "camera_A55D58A8_B1B6_11ED_41C3_3A430DF5D7BF"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -144.22
  },
  "id": "camera_A6A408BF_B1B6_11E3_41B2_77F139967B49"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 52.53
  },
  "id": "camera_A6A078CB_B1B6_11A3_41DC_930E4EBE9344"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "path": "shortest",
     "yawSpeed": 33.25,
     "targetPitch": -82.36,
     "targetYaw": -36.97,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 38
  },
  "id": "camera_A6AC28D7_B1B6_11A3_41DC_698138825EE5"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -74.72
  },
  "id": "camera_A6B5F8EE_B1B6_1165_41E3_2BAD6E01A3D6"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -88.01
  },
  "id": "camera_A6B188FA_B1B6_116D_41C7_EE92285C0B00"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -95.41
  },
  "id": "camera_A6BD7907_B1B6_10A3_41C4_9F351FFE434D"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "path": "shortest",
     "yawSpeed": 216,
     "targetPitch": -74.61,
     "targetYaw": -44.44,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 108
    },
    {
     "path": "shortest",
     "yawSpeed": 33.25,
     "targetPitch": -84.02,
     "targetYaw": -31.99,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 169.42
  },
  "id": "camera_A6869913_B1B6_10A3_41D1_12C6639E9408"
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "minHeight": 50,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 1,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 20,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 2,
  "playbackBarBottom": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 20,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 4,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarBorderRadius": 4,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "horizontalAlign": "center",
    "children": [
     "this.IconButton_5266705B_5F07_7DC4_41CE_F9B2B5401877",
     "this.IconButton_5266705B_5F07_7DC4_41BA_9DC5EC13F0B8",
     "this.IconButton_5266705B_5F07_7DC4_41C4_C06EEB3DBFC5",
     "this.IconButton_5266705B_5F07_7DC4_41D5_17832A26EB46",
     {
      "horizontalAlign": "center",
      "children": [
       "this.IconButton_5266705B_5F07_7DC4_4166_35648BCE8FCF",
       "this.IconButton_5266705B_5F07_7DC4_41C7_A597F5CD8E3C",
       "this.IconButton_5266705B_5F07_7DC4_41A9_D1B8058C1D69"
      ],
      "minHeight": 20,
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "middle",
      "overflow": "hidden",
      "paddingTop": 0,
      "shadow": false,
      "paddingBottom": 0,
      "layout": "vertical",
      "scrollBarColor": "#000000",
      "gap": 4,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "backgroundOpacity": 0,
      "id": "Container_5266705B_5F07_7DC4_41D1_DB7A4AB3DA6C",
      "width": 40,
      "borderRadius": 0,
      "contentOpaque": false,
      "paddingRight": 0
     },
     "this.IconButton_5266705B_5F07_7DC4_41D1_2478984C07CA",
     "this.IconButton_5266705B_5F07_7DC4_41B2_33DE428A6E68",
     {
      "backgroundOpacity": 0,
      "minHeight": 0,
      "iconURL": "skin/IconButton_5266705B_5F07_7DC4_41D3_24192DF36080.png",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": true,
      "cursor": "hand",
      "paddingBottom": 0,
      "pressedIconURL": "skin/IconButton_5266705B_5F07_7DC4_41D3_24192DF36080_pressed.png",
      "width": 40,
      "height": 40,
      "horizontalAlign": "center",
      "id": "IconButton_5266705B_5F07_7DC4_41D3_24192DF36080",
      "borderRadius": 0,
      "paddingRight": 0
     },
     "this.IconButton_5266705B_5F07_7DC4_41CA_4047298C87B0"
    ],
    "minHeight": 20,
    "borderSize": 0,
    "paddingLeft": 0,
    "minWidth": 392,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "hidden",
    "paddingTop": 0,
    "shadow": false,
    "paddingBottom": 0,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundOpacity": 0,
    "id": "Container_5266705B_5F07_7DC4_4164_13C497C5A794",
    "width": 392,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingRight": 0
   }
  ],
  "minHeight": 1,
  "bottom": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "middle",
  "overflow": "scroll",
  "paddingTop": 0,
  "shadow": false,
  "left": "0%",
  "paddingBottom": 0,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 142,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "width": "100%",
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "minHeight": 1,
  "top": "0%",
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 2,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 30,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 2,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 20,
  "progressBackgroundColorDirection": "vertical",
  "height": "31.58%",
  "progressBorderSize": 2,
  "playbackBarBottom": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#AAAAAA",
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "id": "MapViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 20,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "24.408%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 4,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "left": "0%",
  "playbackBarBorderRadius": 4,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "backgroundOpacity": 0,
  "itemLabelFontSize": 14,
  "selectedItemLabelFontWeight": "bold",
  "itemHorizontalAlign": "center",
  "minHeight": 20,
  "itemLabelFontWeight": "normal",
  "top": "0%",
  "itemThumbnailWidth": 75,
  "itemPaddingBottom": 3,
  "rollOverItemBackgroundOpacity": 0,
  "itemThumbnailShadow": true,
  "itemPaddingLeft": 3,
  "borderSize": 0,
  "itemBackgroundColorRatios": [],
  "paddingLeft": 20,
  "itemThumbnailOpacity": 1,
  "minWidth": 20,
  "itemThumbnailShadowBlurRadius": 8,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "itemPaddingTop": 3,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowVerticalLength": 3,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "itemThumbnailBorderRadius": 50,
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowOpacity": 0.54,
  "verticalAlign": "top",
  "itemLabelPosition": "bottom",
  "paddingTop": 10,
  "itemLabelFontColor": "#FFFFFF",
  "class": "ThumbnailList",
  "itemBackgroundColor": [],
  "itemLabelTextDecoration": "none",
  "shadow": false,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "itemOpacity": 1,
  "itemPaddingRight": 3,
  "itemLabelGap": 9,
  "itemLabelHorizontalAlign": "center",
  "paddingBottom": 10,
  "right": "0%",
  "layout": "vertical",
  "scrollBarColor": "#FFFFFF",
  "itemVerticalAlign": "middle",
  "itemLabelFontFamily": "Arial",
  "itemThumbnailScaleMode": "fit_outside",
  "width": 261,
  "rollOverItemLabelFontWeight": "normal",
  "itemLabelFontStyle": "normal",
  "height": "100%",
  "horizontalAlign": "left",
  "itemBackgroundOpacity": 0,
  "id": "ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782",
  "scrollBarOpacity": 0.5,
  "borderRadius": 5,
  "itemBorderRadius": 0,
  "gap": 10,
  "playList": "this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist",
  "selectedItemLabelFontColor": "#FFCC00",
  "paddingRight": 20
 },
 {
  "backgroundOpacity": 0,
  "minHeight": 1,
  "bottom": "0%",
  "paddingLeft": 0,
  "minWidth": 1,
  "borderSize": 0,
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "class": "Image",
  "paddingTop": 0,
  "shadow": false,
  "left": "0%",
  "maxHeight": 216,
  "paddingBottom": 0,
  "width": "14.929%",
  "height": "20.4%",
  "horizontalAlign": "center",
  "id": "Image_A0A7B2CD_B1AA_11A7_41DA_39DB78FE62F9",
  "borderRadius": 0,
  "url": "skin/Image_A0A7B2CD_B1AA_11A7_41DA_39DB78FE62F9.png",
  "maxWidth": 216,
  "paddingRight": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "minHeight": 20,
 "start": "this.syncPlaylists([this.ThumbnailList_A3FE5AE2_AF9A_319D_41D9_8C29A84B9782_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_A789F807_B1B6_10A3_41E1_0736C81458FC.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "minWidth": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "shadow": false,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "scripts": {
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "registerKey": function(key, value){    window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "existsKey": function(key){    return key in window; },
  "unregisterKey": function(key){    delete window[key]; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getKey": function(key){    return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); }
 },
 "paddingBottom": 0,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.IconButton_5266705B_5F07_7DC4_41D3_24192DF36080",
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0
})