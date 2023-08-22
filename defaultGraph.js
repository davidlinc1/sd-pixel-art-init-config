export const defaultGraph = {
  "last_node_id": 122,
  "last_link_id": 212,
  "nodes": [
    {
      "id": 14,
      "type": "PrimitiveNode",
      "pos": [
        -60.48336494445801,
        19.285940277099314
      ],
      "size": {
        "0": 300,
        "1": 160
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            18
          ],
          "widget": {
            "name": "text",
            "config": [
              "STRING",
              {
                "multiline": true
              }
            ]
          },
          "slot_index": 0
        }
      ],
      "title": "Negative Prompt (Text)",
      "properties": {},
      "widgets_values": [
        ""
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 36,
      "type": "Note",
      "pos": [
        -74,
        -470
      ],
      "size": {
        "0": 315.70074462890625,
        "1": 147.9551239013672
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "title": "Note - Load Checkpoint BASE",
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "This is a checkpoint model loader. \n - This is set up automatically with the optimal settings for whatever SD model version you choose to use.\n - In this example, it is for the Base SDXL model\n - This node is also used for SD1.5 and SD2.x models\n \nNOTE: When loading in another person's workflow, be sure to manually choose your own *local* model. This also applies to LoRas and all their deviations"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 38,
      "type": "Note",
      "pos": [
        -51.48336494445802,
        218.28594027709897
      ],
      "size": {
        "0": 284.3257141113281,
        "1": 123.88604736328125
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "title": "Note - Text Prompts",
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "These nodes are where you include the text for:\n - what you want in the picture (Positive Prompt, Green)\n - or what you don't want in the picture (Negative Prompt, Red)\n\nThis node type is called a \"PrimitiveNode\" if you are searching for the node type."
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 41,
      "type": "Note",
      "pos": [
        748.2762852724647,
        -625.6798658708175
      ],
      "size": {
        "0": 320,
        "1": 120
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "title": "Note - VAE Decoder",
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "This node will take the latent data from the KSampler and, using the VAE, it will decode it into visible data\n\nVAE = Latent --> Visible\n\nThis can then be sent to the Save Image node to be saved as a PNG."
      ],
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 42,
      "type": "Note",
      "pos": [
        384.4081741093041,
        383.7042431891819
      ],
      "size": {
        "0": 260,
        "1": 210
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "title": "Note - Empty Latent Image",
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "This node sets the image's resolution in Width and Height.\n\nNOTE: For SDXL, it is recommended to use trained values listed below:\n - 1024 x 1024\n - 1152 x 896\n - 896  x 1152\n - 1216 x 832\n - 832  x 1216\n - 1344 x 768\n - 768  x 1344\n - 1536 x 640\n - 640  x 1536"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 39,
      "type": "Note",
      "pos": [
        401.55279136151427,
        45.22986677539596
      ],
      "size": {
        "0": 210,
        "1": 80
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "title": "Note - CLIP Encode (BASE)",
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "These nodes receive the text from the prompt and use the optimal CLIP settings for the specified checkpoint model (in this case: SDXL Base)"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 48,
      "type": "Note",
      "pos": [
        769.2328170166013,
        646.3826239624018
      ],
      "size": {
        "0": 213.90769958496094,
        "1": 110.17156982421875
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "These can be used to control the total sampling steps and the step at which the sampling switches to the refiner."
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 4,
      "type": "CheckpointLoaderSimple",
      "pos": [
        -90,
        -620
      ],
      "size": {
        "0": 350,
        "1": 100
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            46
          ],
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            47
          ],
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [],
          "slot_index": 2
        }
      ],
      "title": "Load Checkpoint - BASE",
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "sd_xl_base_1.0.safetensors"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 13,
      "type": "PrimitiveNode",
      "pos": [
        -60.48336494445801,
        -180.71405972290043
      ],
      "size": {
        "0": 300,
        "1": 160
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "outputs": [
        {
          "name": "STRING",
          "type": "STRING",
          "links": [
            16
          ],
          "widget": {
            "name": "text",
            "config": [
              "STRING",
              {
                "multiline": true
              }
            ]
          },
          "slot_index": 0
        }
      ],
      "title": "Positive Prompt (Text)",
      "properties": {},
      "widgets_values": [
        "beautiful young girl on the beach, bikini, blue sky, pixelart"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        364.90407165527347,
        233.5841723632813
      ],
      "size": {
        "0": 300,
        "1": 110
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            27
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        4
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 51,
      "type": "VAELoader",
      "pos": [
        733,
        -401
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            57
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "sdxl_vae_1.0.safetensors"
      ]
    },
    {
      "id": 45,
      "type": "PrimitiveNode",
      "pos": [
        773,
        363
      ],
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "outputs": [
        {
          "name": "INT",
          "type": "INT",
          "links": [
            41
          ],
          "widget": {
            "name": "steps",
            "config": [
              "INT",
              {
                "default": 20,
                "min": 1,
                "max": 10000
              }
            ]
          }
        }
      ],
      "title": "steps",
      "properties": {},
      "widgets_values": [
        20,
        "fixed"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 47,
      "type": "PrimitiveNode",
      "pos": [
        771,
        510
      ],
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "outputs": [
        {
          "name": "INT",
          "type": "INT",
          "links": [
            43
          ],
          "widget": {
            "name": "end_at_step",
            "config": [
              "INT",
              {
                "default": 10000,
                "min": 0,
                "max": 10000
              }
            ]
          },
          "slot_index": 0
        }
      ],
      "title": "end_at_step",
      "properties": {},
      "widgets_values": [
        20,
        "fixed"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 119,
      "type": "PixelArtLoadPalettes",
      "pos": [
        1099,
        225
      ],
      "size": [
        315.8960789184573,
        303.46154663085963
      ],
      "flags": {},
      "order": 13,
      "mode": 0,
      "outputs": [
        {
          "name": "paletteList",
          "type": "LIST",
          "links": [
            207
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "PixelArtLoadPalettes"
      },
      "widgets_values": [
        "pastel-qt-1x.png",
        false,
        "Grid settings. The values will be forwarded to the 'PixelArt Palette Converter to render the grid with all palettes from this node.'",
        40,
        "#f40e12",
        "#fff",
        6,
        true,
        3
      ]
    },
    {
      "id": 49,
      "type": "LoraLoader",
      "pos": [
        380,
        -621
      ],
      "size": {
        "0": 315,
        "1": 126
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 46
        },
        {
          "name": "clip",
          "type": "CLIP",
          "link": 47
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            52
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            50,
            51
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LoraLoader"
      },
      "widgets_values": [
        "pixel-art-xl-v1.1.safetensors",
        1,
        1
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        401.55279136151427,
        -134.7701332246045
      ],
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 50
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 16,
          "widget": {
            "name": "text",
            "config": [
              "STRING",
              {
                "multiline": true
              }
            ]
          },
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            11
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "beautiful young girl on the beach, bikini, blue sky, pixelart"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": [
        401.55279136151427,
        -44.77013322460424
      ],
      "size": {
        "0": 210,
        "1": 54
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 51
        },
        {
          "name": "text",
          "type": "STRING",
          "link": 18,
          "widget": {
            "name": "text",
            "config": [
              "STRING",
              {
                "multiline": true
              }
            ]
          },
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            12
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 10,
      "type": "KSamplerAdvanced",
      "pos": [
        731,
        -299
      ],
      "size": {
        "0": 300,
        "1": 538
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 52
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 11
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 12
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 27
        },
        {
          "name": "steps",
          "type": "INT",
          "link": 41,
          "widget": {
            "name": "steps",
            "config": [
              "INT",
              {
                "default": 20,
                "min": 1,
                "max": 10000
              }
            ]
          },
          "slot_index": 4
        },
        {
          "name": "end_at_step",
          "type": "INT",
          "link": 43,
          "widget": {
            "name": "end_at_step",
            "config": [
              "INT",
              {
                "default": 10000,
                "min": 0,
                "max": 10000
              }
            ]
          },
          "slot_index": 5
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            70
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "title": "KSampler (Advanced) - BASE",
      "properties": {
        "Node name for S&R": "KSamplerAdvanced"
      },
      "widgets_values": [
        "enable",
        485461415230978,
        "fixed",
        20,
        8,
        "euler",
        "normal",
        0,
        20,
        "enable"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 17,
      "type": "VAEDecode",
      "pos": [
        1071,
        -258
      ],
      "size": {
        "0": 200,
        "1": 50
      },
      "flags": {},
      "order": 18,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 70,
          "slot_index": 0
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 57
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            206,
            210,
            212
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "color": "#332922",
      "bgcolor": "#593930"
    },
    {
      "id": 120,
      "type": "PixelArtDetectorConverter",
      "pos": [
        1565,
        0
      ],
      "size": [
        417.4881225585939,
        599.805104980469
      ],
      "flags": {},
      "order": 19,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 206
        },
        {
          "name": "paletteList",
          "type": "LIST",
          "link": 207
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            208
          ],
          "shape": 6,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "PixelArtDetectorConverter"
      },
      "widgets_values": [
        "GAMEBOY",
        "Image.quantize",
        2,
        512,
        512,
        true,
        64,
        false,
        "MAXCOVERAGE",
        "OpenCV.kmeans: only when reducing is enabled.\nRANDOM_CENTERS: Fast but doesn't guarantee same labels for the same image.\nPP_CENTERS: Slow but will yield optimum and consistent results for same input image.\nattempts: to run criteria_max_iterations so it gets the best labels\n",
        "RANDOM_CENTERS",
        10,
        10,
        "Clean up colors: Iterate and eliminate pixels while there was none left covering less than the 'cleanup_pixels_threshold' of the image.\nOptionally, enable the 'reduce colors' option, which runs before this cleanup. Good cleanup_threshold values: between .01 & .05",
        false,
        0.02
      ]
    },
    {
      "id": 121,
      "type": "PixelArtDetectorToImage",
      "pos": [
        1426,
        -350
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 20,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 210
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            211
          ],
          "shape": 6,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "PixelArtDetectorToImage"
      },
      "widgets_values": [
        false,
        128
      ]
    },
    {
      "id": 122,
      "type": "PixelArtDetectorSave",
      "pos": [
        1343,
        -1099
      ],
      "size": [
        450.1040039062502,
        604.7489837646485
      ],
      "flags": {},
      "order": 21,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 212
        }
      ],
      "properties": {
        "Node name for S&R": "PixelArtDetectorSave"
      },
      "widgets_values": [
        "%date%/PixelArt",
        false,
        128,
        "lossy",
        80,
        false,
        true,
        512,
        512
      ]
    },
    {
      "id": 118,
      "type": "SaveImage",
      "pos": [
        2238,
        -75
      ],
      "size": {
        "0": 484.3656005859375,
        "1": 556.1629028320312
      },
      "flags": {},
      "order": 22,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 208
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 111,
      "type": "ImageScale",
      "pos": [
        1794,
        -377
      ],
      "size": {
        "0": 315,
        "1": 130
      },
      "flags": {},
      "order": 23,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 211
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            203
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScale"
      },
      "widgets_values": [
        "nearest-exact",
        512,
        512,
        "disabled"
      ]
    },
    {
      "id": 116,
      "type": "SaveImage",
      "pos": [
        2236,
        -814
      ],
      "size": {
        "0": 484.3656005859375,
        "1": 556.1629028320312
      },
      "flags": {},
      "order": 24,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 203
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    }
  ],
  "links": [
    [
      11,
      6,
      0,
      10,
      1,
      "CONDITIONING"
    ],
    [
      12,
      7,
      0,
      10,
      2,
      "CONDITIONING"
    ],
    [
      16,
      13,
      0,
      6,
      1,
      "STRING"
    ],
    [
      18,
      14,
      0,
      7,
      1,
      "STRING"
    ],
    [
      27,
      5,
      0,
      10,
      3,
      "LATENT"
    ],
    [
      41,
      45,
      0,
      10,
      4,
      "INT"
    ],
    [
      43,
      47,
      0,
      10,
      5,
      "INT"
    ],
    [
      46,
      4,
      0,
      49,
      0,
      "MODEL"
    ],
    [
      47,
      4,
      1,
      49,
      1,
      "CLIP"
    ],
    [
      50,
      49,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      51,
      49,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      52,
      49,
      0,
      10,
      0,
      "MODEL"
    ],
    [
      57,
      51,
      0,
      17,
      1,
      "VAE"
    ],
    [
      70,
      10,
      0,
      17,
      0,
      "LATENT"
    ],
    [
      203,
      111,
      0,
      116,
      0,
      "IMAGE"
    ],
    [
      206,
      17,
      0,
      120,
      0,
      "IMAGE"
    ],
    [
      207,
      119,
      0,
      120,
      1,
      "LIST"
    ],
    [
      208,
      120,
      0,
      118,
      0,
      "IMAGE"
    ],
    [
      210,
      17,
      0,
      121,
      0,
      "IMAGE"
    ],
    [
      211,
      121,
      0,
      111,
      0,
      "IMAGE"
    ],
    [
      212,
      17,
      0,
      122,
      0,
      "IMAGE"
    ]
  ],
  "groups": [
    {
      "title": "Base Prompt",
      "bounding": [
        381,
        -215,
        252,
        361
      ],
      "color": "#3f789e",
      "locked": false
    },
    {
      "title": "Text Prompts",
      "bounding": [
        -81,
        -264,
        339,
        622
      ],
      "color": "#3f789e",
      "locked": false
    },
    {
      "title": "Load in BASE SDXL Model",
      "bounding": [
        -100,
        -700,
        369,
        399
      ],
      "color": "#a1309b",
      "locked": false
    },
    {
      "title": "Empty Latent Image",
      "bounding": [
        344,
        160,
        339,
        443
      ],
      "color": "#a1309b",
      "locked": false
    },
    {
      "title": "VAE Decoder",
      "bounding": [
        730,
        -804,
        360,
        350
      ],
      "color": "#b06634",
      "locked": false
    },
    {
      "title": "Step Control",
      "bounding": [
        738,
        252,
        284,
        524
      ],
      "color": "#3f789e",
      "locked": false
    }
  ],
  "config": {},
  "extra": {},
  "version": 0.4
}
}
