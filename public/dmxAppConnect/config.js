dmx.config({
  "login": {
    "loginform": [
      {
        "type": "array",
        "name": "data"
      },
      {
        "type": "array",
        "name": "headers"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      },
      {
        "type": "text",
        "name": "nom"
      },
      {
        "type": "number",
        "name": "matricule"
      }
    ],
    "global": [
      {
        "type": "text",
        "name": "token"
      }
    ]
  },
  "accessoires": {
    "accessoires": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAccessoire"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "object",
            "name": "TypeAccessoire",
            "sub": [
              {
                "type": "number",
                "name": "IdType"
              },
              {
                "type": "text",
                "name": "Nom"
              }
            ]
          },
          {
            "type": "object",
            "name": "affectationAccessoire",
            "sub": [
              {
                "type": "number",
                "name": "IdAffect"
              },
              {
                "type": "object",
                "name": "Accessoire",
                "sub": [
                  {
                    "type": "number",
                    "name": "IdAccessoire"
                  },
                  {
                    "type": "text",
                    "name": "Nom"
                  },
                  {
                    "type": "number",
                    "name": "IdType"
                  }
                ]
              },
              {
                "type": "text",
                "name": "TypeAccessoire"
              },
              {
                "type": "object",
                "name": "Tsp",
                "sub": [
                  {
                    "type": "number",
                    "name": "IdTsp"
                  },
                  {
                    "type": "text",
                    "name": "Nom"
                  },
                  {
                    "type": "text",
                    "name": "CodeTsp"
                  },
                  {
                    "type": "text",
                    "name": "Description"
                  },
                  {
                    "type": "text",
                    "name": "DateCrea"
                  },
                  {
                    "type": "text",
                    "name": "Releveur"
                  },
                  {
                    "type": "text",
                    "name": "SynsPath"
                  },
                  {
                    "type": "text",
                    "name": "ArchivePath"
                  },
                  {
                    "type": "text",
                    "name": "SynsPathWin7"
                  },
                  {
                    "type": "text",
                    "name": "Pin"
                  },
                  {
                    "type": "text",
                    "name": "Puk"
                  },
                  {
                    "type": "text",
                    "name": "NumTel"
                  },
                  {
                    "type": "text",
                    "name": "ModeleId"
                  },
                  {
                    "type": "text",
                    "name": "EquipeId"
                  },
                  {
                    "type": "text",
                    "name": "SectEmp"
                  }
                ]
              },
              {
                "type": "object",
                "name": "Employe",
                "sub": [
                  {
                    "type": "number",
                    "name": "Matricule"
                  },
                  {
                    "type": "text",
                    "name": "Nom"
                  },
                  {
                    "type": "text",
                    "name": "IdClient"
                  },
                  {
                    "type": "text",
                    "name": "AInit"
                  },
                  {
                    "type": "text",
                    "name": "IdMachine"
                  },
                  {
                    "type": "text",
                    "name": "PosteMobile"
                  },
                  {
                    "type": "text",
                    "name": "Connecte"
                  },
                  {
                    "type": "text",
                    "name": "PosteEncours"
                  },
                  {
                    "type": "text",
                    "name": "DernConn"
                  },
                  {
                    "type": "text",
                    "name": "DernDeconn"
                  },
                  {
                    "type": "text",
                    "name": "Mess"
                  },
                  {
                    "type": "text",
                    "name": "DateMess"
                  },
                  {
                    "type": "text",
                    "name": "MessLu"
                  },
                  {
                    "type": "text",
                    "name": "InstVers"
                  },
                  {
                    "type": "text",
                    "name": "InstUrgence"
                  },
                  {
                    "type": "number",
                    "name": "Statut"
                  },
                  {
                    "type": "text",
                    "name": "DroitAuQuota"
                  },
                  {
                    "type": "text",
                    "name": "Equipe"
                  },
                  {
                    "type": "text",
                    "name": "AppVersion"
                  },
                  {
                    "type": "text",
                    "name": "DateVisite"
                  },
                  {
                    "type": "text",
                    "name": "PersonVisite"
                  },
                  {
                    "type": "text",
                    "name": "UserTsptest"
                  },
                  {
                    "type": "text",
                    "name": "PasswordSalt"
                  },
                  {
                    "type": "text",
                    "name": "PasswordHash"
                  },
                  {
                    "type": "text",
                    "name": "Motpasse"
                  }
                ]
              },
              {
                "type": "object",
                "name": "UserCrea",
                "sub": [
                  {
                    "type": "number",
                    "name": "Matricule"
                  },
                  {
                    "type": "text",
                    "name": "Nom"
                  },
                  {
                    "type": "text",
                    "name": "IdClient"
                  },
                  {
                    "type": "text",
                    "name": "AInit"
                  },
                  {
                    "type": "text",
                    "name": "IdMachine"
                  },
                  {
                    "type": "text",
                    "name": "PosteMobile"
                  },
                  {
                    "type": "text",
                    "name": "Connecte"
                  },
                  {
                    "type": "text",
                    "name": "PosteEncours"
                  },
                  {
                    "type": "text",
                    "name": "DernConn"
                  },
                  {
                    "type": "text",
                    "name": "DernDeconn"
                  },
                  {
                    "type": "text",
                    "name": "Mess"
                  },
                  {
                    "type": "text",
                    "name": "DateMess"
                  },
                  {
                    "type": "text",
                    "name": "MessLu"
                  },
                  {
                    "type": "text",
                    "name": "InstVers"
                  },
                  {
                    "type": "text",
                    "name": "InstUrgence"
                  },
                  {
                    "type": "number",
                    "name": "Statut"
                  },
                  {
                    "type": "text",
                    "name": "DroitAuQuota"
                  },
                  {
                    "type": "text",
                    "name": "Equipe"
                  },
                  {
                    "type": "text",
                    "name": "AppVersion"
                  },
                  {
                    "type": "text",
                    "name": "DateVisite"
                  },
                  {
                    "type": "text",
                    "name": "PersonVisite"
                  },
                  {
                    "type": "text",
                    "name": "UserTsptest"
                  },
                  {
                    "type": "text",
                    "name": "PasswordSalt"
                  },
                  {
                    "type": "text",
                    "name": "PasswordHash"
                  },
                  {
                    "type": "text",
                    "name": "Motpasse"
                  }
                ]
              },
              {
                "type": "text",
                "name": "DateCrea"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "tableRepeat1": {
      "meta": [
        {
          "type": "number",
          "name": "IdAccessoire"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "object",
          "name": "TypeAccessoire",
          "sub": [
            {
              "name": "$index",
              "type": "number"
            },
            {
              "name": "$key",
              "type": "text"
            },
            {
              "name": "$value",
              "type": "object"
            },
            {
              "type": "number",
              "name": "IdType"
            },
            {
              "type": "text",
              "name": "Nom"
            }
          ]
        },
        {
          "type": "object",
          "name": "affectationAccessoire",
          "sub": [
            {
              "type": "number",
              "name": "IdAffect"
            },
            {
              "type": "object",
              "name": "Accessoire",
              "sub": [
                {
                  "type": "number",
                  "name": "IdAccessoire"
                },
                {
                  "type": "text",
                  "name": "Nom"
                },
                {
                  "type": "number",
                  "name": "IdType"
                }
              ]
            },
            {
              "type": "text",
              "name": "TypeAccessoire"
            },
            {
              "type": "object",
              "name": "Tsp",
              "sub": [
                {
                  "type": "number",
                  "name": "IdTsp"
                },
                {
                  "type": "text",
                  "name": "Nom"
                },
                {
                  "type": "text",
                  "name": "CodeTsp"
                },
                {
                  "type": "text",
                  "name": "Description"
                },
                {
                  "type": "text",
                  "name": "DateCrea"
                },
                {
                  "type": "text",
                  "name": "Releveur"
                },
                {
                  "type": "text",
                  "name": "SynsPath"
                },
                {
                  "type": "text",
                  "name": "ArchivePath"
                },
                {
                  "type": "text",
                  "name": "SynsPathWin7"
                },
                {
                  "type": "text",
                  "name": "Pin"
                },
                {
                  "type": "text",
                  "name": "Puk"
                },
                {
                  "type": "text",
                  "name": "NumTel"
                },
                {
                  "type": "text",
                  "name": "ModeleId"
                },
                {
                  "type": "text",
                  "name": "EquipeId"
                },
                {
                  "type": "text",
                  "name": "SectEmp"
                }
              ]
            },
            {
              "type": "object",
              "name": "Employe",
              "sub": [
                {
                  "type": "number",
                  "name": "Matricule"
                },
                {
                  "type": "text",
                  "name": "Nom"
                },
                {
                  "type": "text",
                  "name": "IdClient"
                },
                {
                  "type": "text",
                  "name": "AInit"
                },
                {
                  "type": "text",
                  "name": "IdMachine"
                },
                {
                  "type": "text",
                  "name": "PosteMobile"
                },
                {
                  "type": "text",
                  "name": "Connecte"
                },
                {
                  "type": "text",
                  "name": "PosteEncours"
                },
                {
                  "type": "text",
                  "name": "DernConn"
                },
                {
                  "type": "text",
                  "name": "DernDeconn"
                },
                {
                  "type": "text",
                  "name": "Mess"
                },
                {
                  "type": "text",
                  "name": "DateMess"
                },
                {
                  "type": "text",
                  "name": "MessLu"
                },
                {
                  "type": "text",
                  "name": "InstVers"
                },
                {
                  "type": "text",
                  "name": "InstUrgence"
                },
                {
                  "type": "number",
                  "name": "Statut"
                },
                {
                  "type": "text",
                  "name": "DroitAuQuota"
                },
                {
                  "type": "text",
                  "name": "Equipe"
                },
                {
                  "type": "text",
                  "name": "AppVersion"
                },
                {
                  "type": "text",
                  "name": "DateVisite"
                },
                {
                  "type": "text",
                  "name": "PersonVisite"
                },
                {
                  "type": "text",
                  "name": "UserTsptest"
                },
                {
                  "type": "text",
                  "name": "PasswordSalt"
                },
                {
                  "type": "text",
                  "name": "PasswordHash"
                },
                {
                  "type": "text",
                  "name": "Motpasse"
                }
              ]
            },
            {
              "type": "object",
              "name": "UserCrea",
              "sub": [
                {
                  "type": "number",
                  "name": "Matricule"
                },
                {
                  "type": "text",
                  "name": "Nom"
                },
                {
                  "type": "text",
                  "name": "IdClient"
                },
                {
                  "type": "text",
                  "name": "AInit"
                },
                {
                  "type": "text",
                  "name": "IdMachine"
                },
                {
                  "type": "text",
                  "name": "PosteMobile"
                },
                {
                  "type": "text",
                  "name": "Connecte"
                },
                {
                  "type": "text",
                  "name": "PosteEncours"
                },
                {
                  "type": "text",
                  "name": "DernConn"
                },
                {
                  "type": "text",
                  "name": "DernDeconn"
                },
                {
                  "type": "text",
                  "name": "Mess"
                },
                {
                  "type": "text",
                  "name": "DateMess"
                },
                {
                  "type": "text",
                  "name": "MessLu"
                },
                {
                  "type": "text",
                  "name": "InstVers"
                },
                {
                  "type": "text",
                  "name": "InstUrgence"
                },
                {
                  "type": "number",
                  "name": "Statut"
                },
                {
                  "type": "text",
                  "name": "DroitAuQuota"
                },
                {
                  "type": "text",
                  "name": "Equipe"
                },
                {
                  "type": "text",
                  "name": "AppVersion"
                },
                {
                  "type": "text",
                  "name": "DateVisite"
                },
                {
                  "type": "text",
                  "name": "PersonVisite"
                },
                {
                  "type": "text",
                  "name": "UserTsptest"
                },
                {
                  "type": "text",
                  "name": "PasswordSalt"
                },
                {
                  "type": "text",
                  "name": "PasswordHash"
                },
                {
                  "type": "text",
                  "name": "Motpasse"
                }
              ]
            },
            {
              "type": "text",
              "name": "DateCrea"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_view1": {
      "meta": [
        {
          "type": "number",
          "name": "IdModele"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "object",
          "name": "UserCrea",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "text",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "text",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "RefModel"
        },
        {
          "type": "text",
          "name": "Img"
        }
      ],
      "outputType": "array"
    },
    "datastore1": [
      {
        "type": "text",
        "name": "Appareil"
      },
      {
        "type": "text",
        "name": "Releveur"
      },
      {
        "type": "text",
        "name": "Affecté par"
      },
      {
        "type": "text",
        "name": "Date"
      }
    ],
    "tableRepeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "IdAffect"
        },
        {
          "type": "object",
          "name": "Accessoire",
          "sub": [
            {
              "type": "number",
              "name": "IdAccessoire"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "number",
              "name": "IdType"
            }
          ]
        },
        {
          "type": "text",
          "name": "TypeAccessoire"
        },
        {
          "type": "object",
          "name": "Tsp",
          "sub": [
            {
              "type": "number",
              "name": "IdTsp"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "CodeTsp"
            },
            {
              "type": "text",
              "name": "Description"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "Releveur"
            },
            {
              "type": "text",
              "name": "SynsPath"
            },
            {
              "type": "text",
              "name": "ArchivePath"
            },
            {
              "type": "text",
              "name": "SynsPathWin7"
            },
            {
              "type": "text",
              "name": "Pin"
            },
            {
              "type": "text",
              "name": "Puk"
            },
            {
              "type": "text",
              "name": "NumTel"
            },
            {
              "type": "text",
              "name": "ModeleId"
            },
            {
              "type": "text",
              "name": "EquipeId"
            },
            {
              "type": "text",
              "name": "SectEmp"
            }
          ]
        },
        {
          "type": "object",
          "name": "Employe",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "text",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "text",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "object",
          "name": "UserCrea",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "text",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "text",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "text",
          "name": "DateCrea"
        }
      ],
      "outputType": "object"
    },
    "affectation": [
      {
        "type": "object",
        "name": "data"
      }
    ],
    "datastore2": [
      {
        "type": "object",
        "name": "data"
      }
    ],
    "actualAffectation": {
      "meta": [
        {
          "type": "number",
          "name": "IdAffect"
        },
        {
          "type": "object",
          "name": "Accessoire",
          "sub": [
            {
              "type": "number",
              "name": "IdAccessoire"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "number",
              "name": "IdType"
            }
          ]
        },
        {
          "type": "text",
          "name": "TypeAccessoire"
        },
        {
          "type": "object",
          "name": "Tsp",
          "sub": [
            {
              "type": "number",
              "name": "IdTsp"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "CodeTsp"
            },
            {
              "type": "text",
              "name": "Description"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "Releveur"
            },
            {
              "type": "text",
              "name": "SynsPath"
            },
            {
              "type": "text",
              "name": "ArchivePath"
            },
            {
              "type": "text",
              "name": "SynsPathWin7"
            },
            {
              "type": "text",
              "name": "Pin"
            },
            {
              "type": "text",
              "name": "Puk"
            },
            {
              "type": "text",
              "name": "NumTel"
            },
            {
              "type": "text",
              "name": "ModeleId"
            },
            {
              "type": "text",
              "name": "EquipeId"
            },
            {
              "type": "text",
              "name": "SectEmp"
            }
          ]
        },
        {
          "type": "object",
          "name": "Employe",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "text",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "text",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "object",
          "name": "UserCrea",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "text",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "text",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "text",
          "name": "DateCrea"
        }
      ],
      "outputType": "object"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      },
      {
        "type": "number",
        "name": "matricule"
      }
    ],
    "listModelAccesoires": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdModele"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserCrea"
          },
          {
            "type": "number",
            "name": "ModelAnnee"
          },
          {
            "type": "number",
            "name": "NombreAppareil"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "RefModel"
          },
          {
            "type": "text",
            "name": "Img"
          },
          {
            "type": "number",
            "name": "Prix"
          },
          {
            "type": "text",
            "name": "TypeAppareil"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "data_view_accessory": {
      "meta": [
        {
          "type": "number",
          "name": "id_tsp"
        },
        {
          "type": "text",
          "name": "nom"
        },
        {
          "type": "text",
          "name": "code_tsp"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "datetime",
          "name": "date_crea"
        },
        {
          "type": "number",
          "name": "releveur"
        },
        {
          "type": "text",
          "name": "syns_path"
        },
        {
          "type": "text",
          "name": "archive_path"
        },
        {
          "type": "text",
          "name": "syns_path_win7"
        },
        {
          "type": "text",
          "name": "pin"
        },
        {
          "type": "text",
          "name": "puk"
        },
        {
          "type": "number",
          "name": "num_tel"
        },
        {
          "type": "number",
          "name": "modele_id"
        },
        {
          "type": "number",
          "name": "equipe_id"
        },
        {
          "type": "number",
          "name": "sect_emp"
        },
        {
          "type": "text",
          "name": "num_serie"
        },
        {
          "type": "datetime",
          "name": "date_achat"
        },
        {
          "type": "number",
          "name": "annee_production"
        },
        {
          "type": "number",
          "name": "user_crea"
        }
      ],
      "outputType": "array"
    },
    "data_viewModel": {
      "meta": [
        {
          "type": "number",
          "name": "id_modele"
        },
        {
          "type": "text",
          "name": "nom"
        },
        {
          "type": "datetime",
          "name": "date_crea"
        },
        {
          "type": "number",
          "name": "user_crea"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "ref_model"
        },
        {
          "type": "number",
          "name": "model_annee"
        },
        {
          "type": "text",
          "name": "img"
        },
        {
          "type": "text",
          "name": "type_appareil"
        },
        {
          "type": "number",
          "name": "prix"
        },
        {
          "type": "text",
          "name": "ref_court"
        }
      ],
      "outputType": "array"
    },
    "allTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "Releveur"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "EquipeName"
          },
          {
            "type": "text",
            "name": "EmployeName"
          },
          {
            "type": "array",
            "name": "LogAffectation"
          },
          {
            "type": "text",
            "name": "Affectation"
          },
          {
            "type": "array",
            "name": "ListAccessoire"
          },
          {
            "type": "array",
            "name": "ListProbleme"
          },
          {
            "type": "object",
            "name": "Model",
            "sub": [
              {
                "type": "number",
                "name": "IdModele"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "RefModel"
              },
              {
                "type": "text",
                "name": "Img"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "affectedTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAffect"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "NomTsp"
          },
          {
            "type": "text",
            "name": "NomEmploye"
          },
          {
            "type": "text",
            "name": "affectedBy"
          },
          {
            "type": "object",
            "name": "Tsp",
            "sub": [
              {
                "type": "number",
                "name": "IdTsp"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "CodeTsp"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "Releveur"
              },
              {
                "type": "text",
                "name": "SynsPath"
              },
              {
                "type": "text",
                "name": "ArchivePath"
              },
              {
                "type": "text",
                "name": "SynsPathWin7"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "number",
                "name": "NumTel"
              },
              {
                "type": "text",
                "name": "ModeleId"
              },
              {
                "type": "text",
                "name": "EquipeId"
              },
              {
                "type": "text",
                "name": "SectEmp"
              }
            ]
          },
          {
            "type": "object",
            "name": "SimMobile",
            "sub": [
              {
                "type": "number",
                "name": "IdSim"
              },
              {
                "type": "number",
                "name": "NumTel"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              }
            ]
          },
          {
            "type": "object",
            "name": "Employe",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "number",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "number",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "text",
            "name": "DateCreation"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "tspLoadData": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "Releveur"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "EquipeName"
          },
          {
            "type": "text",
            "name": "EmployeName"
          },
          {
            "type": "array",
            "name": "LogAffectation"
          },
          {
            "type": "object",
            "name": "Affectation",
            "sub": [
              {
                "type": "number",
                "name": "IdAffect"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "NomTsp"
              },
              {
                "type": "text",
                "name": "NomEmploye"
              },
              {
                "type": "text",
                "name": "affectedBy"
              },
              {
                "type": "text",
                "name": "Tsp"
              },
              {
                "type": "text",
                "name": "SimMobile"
              },
              {
                "type": "text",
                "name": "Employe"
              },
              {
                "type": "text",
                "name": "DateCreation"
              }
            ]
          },
          {
            "type": "array",
            "name": "ListAccessoire"
          },
          {
            "type": "array",
            "name": "ListProbleme"
          },
          {
            "type": "object",
            "name": "Model",
            "sub": [
              {
                "type": "number",
                "name": "IdModele"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "RefModel"
              },
              {
                "type": "text",
                "name": "Img"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "nonAffectedTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateAchat"
          },
          {
            "type": "text",
            "name": "NumSerie"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "Releveur"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "SynsPath"
          },
          {
            "type": "text",
            "name": "ArchivePath"
          },
          {
            "type": "text",
            "name": "SynsPathWin7"
          },
          {
            "type": "text",
            "name": "Pin"
          },
          {
            "type": "text",
            "name": "Puk"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "number",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "AnneeProduction"
          },
          {
            "type": "text",
            "name": "EquipeId"
          },
          {
            "type": "text",
            "name": "SectEmp"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "AffectedTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAffect"
          },
          {
            "type": "object",
            "name": "Tsp",
            "sub": [
              {
                "type": "number",
                "name": "IdTsp"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateAchat"
              },
              {
                "type": "text",
                "name": "NumSerie"
              },
              {
                "type": "text",
                "name": "CodeTsp"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "text",
                "name": "Releveur"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "SynsPath"
              },
              {
                "type": "text",
                "name": "ArchivePath"
              },
              {
                "type": "text",
                "name": "SynsPathWin7"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "NumTel"
              },
              {
                "type": "number",
                "name": "ModeleId"
              },
              {
                "type": "text",
                "name": "AnneeProduction"
              },
              {
                "type": "text",
                "name": "EquipeId"
              },
              {
                "type": "text",
                "name": "SectEmp"
              }
            ]
          },
          {
            "type": "object",
            "name": "ModelTsp",
            "sub": [
              {
                "type": "number",
                "name": "IdModele"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "text",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "ModelAnnee"
              },
              {
                "type": "text",
                "name": "NombreAppareil"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "RefModel"
              },
              {
                "type": "text",
                "name": "Img"
              },
              {
                "type": "text",
                "name": "Prix"
              },
              {
                "type": "text",
                "name": "TypeAppareil"
              }
            ]
          },
          {
            "type": "text",
            "name": "SimMobile"
          },
          {
            "type": "object",
            "name": "Employe",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "number",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "number",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserGescli"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "object",
            "name": "UserCrea",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "text",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "text",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserGescli"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "text",
            "name": "DateCreation"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "index": {
    "tsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "Releveur"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "EquipeName"
          },
          {
            "type": "text",
            "name": "EmployeName"
          },
          {
            "type": "array",
            "name": "logAffectation"
          },
          {
            "type": "text",
            "name": "affectation"
          },
          {
            "type": "array",
            "name": "suiviBorderau"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "selectedTsp": {
      "meta": null,
      "outputType": "number"
    },
    "iterator1": {
      "meta": [
        {
          "type": "number",
          "name": "IdTsp"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "CodeTsp"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "text",
          "name": "Releveur"
        },
        {
          "type": "text",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "ModeleId"
        },
        {
          "type": "text",
          "name": "EquipeName"
        },
        {
          "type": "text",
          "name": "EmployeName"
        },
        {
          "type": "array",
          "name": "logAffectation"
        },
        {
          "type": "text",
          "name": "affectation"
        },
        {
          "type": "array",
          "name": "suiviBorderau"
        }
      ],
      "outputType": "array"
    },
    "data_view1": {
      "meta": [
        {
          "type": "number",
          "name": "IdTsp"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "CodeTsp"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "text",
          "name": "Releveur"
        },
        {
          "type": "text",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "ModeleId"
        },
        {
          "type": "text",
          "name": "EquipeName"
        },
        {
          "type": "text",
          "name": "EmployeName"
        },
        {
          "type": "array",
          "name": "logAffectation"
        },
        {
          "type": "text",
          "name": "affectation"
        },
        {
          "type": "array",
          "name": "suiviBorderau"
        }
      ],
      "outputType": "array"
    },
    "bordereau": {
      "meta": null,
      "outputType": "array"
    },
    "selectedTspId": {
      "meta": null,
      "outputType": "number"
    },
    "suivibordereaudata": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Periode"
          },
          {
            "type": "number",
            "name": "Tournee"
          },
          {
            "type": "number",
            "name": "Bordereau"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "Libcourt"
          },
          {
            "type": "boolean",
            "name": "Checked"
          },
          {
            "type": "text",
            "name": "SuivieAnomalie"
          },
          {
            "type": "text",
            "name": "DateMaj"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "UserMaj"
          },
          {
            "type": "text",
            "name": "Releveur"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "logAffectationTspData": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdLog"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "TspName"
          },
          {
            "type": "text",
            "name": "EmployeName"
          },
          {
            "type": "number",
            "name": "SimNumber"
          },
          {
            "type": "text",
            "name": "affectedBy"
          },
          {
            "type": "text",
            "name": "Deleted"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "accessoiresData": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAffect"
          },
          {
            "type": "object",
            "name": "Accessoire",
            "sub": [
              {
                "type": "number",
                "name": "IdAccessoire"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdType"
              }
            ]
          },
          {
            "type": "object",
            "name": "TypeAccessoire",
            "sub": [
              {
                "type": "number",
                "name": "IdType"
              },
              {
                "type": "text",
                "name": "Nom"
              }
            ]
          },
          {
            "type": "object",
            "name": "Tsp",
            "sub": [
              {
                "type": "number",
                "name": "IdTsp"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "CodeTsp"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "text",
                "name": "Releveur"
              },
              {
                "type": "text",
                "name": "SynsPath"
              },
              {
                "type": "text",
                "name": "ArchivePath"
              },
              {
                "type": "text",
                "name": "SynsPathWin7"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "NumTel"
              },
              {
                "type": "number",
                "name": "ModeleId"
              },
              {
                "type": "text",
                "name": "EquipeId"
              },
              {
                "type": "number",
                "name": "SectEmp"
              }
            ]
          },
          {
            "type": "object",
            "name": "Employe",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "text",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "text",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "object",
            "name": "UserCrea",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "text",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "text",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "text",
            "name": "DateCrea"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "query": [
      {
        "type": "text",
        "name": "offset"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "repeat1": {
      "meta": null,
      "outputType": "text"
    },
    "tsp_list": {
      "meta": [
        {
          "type": "number",
          "name": "IdTsp"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "CodeTsp"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "text",
          "name": "Releveur"
        },
        {
          "type": "text",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "ModeleId"
        },
        {
          "type": "text",
          "name": "EquipeName"
        },
        {
          "type": "text",
          "name": "EmployeName"
        },
        {
          "type": "array",
          "name": "logAffectation"
        },
        {
          "type": "text",
          "name": "affectation"
        },
        {
          "type": "array",
          "name": "suiviBorderau"
        }
      ],
      "outputType": "array"
    },
    "var1": {
      "meta": [
        {
          "type": "number",
          "name": "IdTsp"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "CodeTsp"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "text",
          "name": "Releveur"
        },
        {
          "type": "text",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "ModeleId"
        },
        {
          "type": "text",
          "name": "EquipeName"
        },
        {
          "type": "text",
          "name": "EmployeName"
        },
        {
          "type": "array",
          "name": "logAffectation"
        },
        {
          "type": "text",
          "name": "affectation"
        },
        {
          "type": "array",
          "name": "suiviBorderau"
        }
      ],
      "outputType": "array"
    },
    "affectationByTsp": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAffect"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "NomTsp"
          },
          {
            "type": "text",
            "name": "NomEmploye"
          },
          {
            "type": "text",
            "name": "affectedBy"
          },
          {
            "type": "object",
            "name": "Tsp",
            "sub": [
              {
                "type": "number",
                "name": "IdTsp"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "CodeTsp"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "text",
                "name": "Releveur"
              },
              {
                "type": "text",
                "name": "SynsPath"
              },
              {
                "type": "text",
                "name": "ArchivePath"
              },
              {
                "type": "text",
                "name": "SynsPathWin7"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "NumTel"
              },
              {
                "type": "number",
                "name": "ModeleId"
              },
              {
                "type": "text",
                "name": "EquipeId"
              },
              {
                "type": "number",
                "name": "SectEmp"
              }
            ]
          },
          {
            "type": "object",
            "name": "SimMobile",
            "sub": [
              {
                "type": "number",
                "name": "IdSim"
              },
              {
                "type": "number",
                "name": "NumTel"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              }
            ]
          },
          {
            "type": "object",
            "name": "Employe",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "number",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "text",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "text",
            "name": "DateCreation"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "listModelTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdModele"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "ModelAnnee"
          },
          {
            "type": "number",
            "name": "NombreAppareil"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "RefModel"
          },
          {
            "type": "text",
            "name": "Img"
          },
          {
            "type": "text",
            "name": "Prix"
          },
          {
            "type": "text",
            "name": "Type"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "tspViewData": {
      "meta": [
        {
          "name": "id_tsp",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "code_tsp",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "releveur",
          "type": "number"
        },
        {
          "name": "syns_path",
          "type": "text"
        },
        {
          "name": "archive_path",
          "type": "text"
        },
        {
          "name": "syns_path_win7",
          "type": "text"
        },
        {
          "name": "pin",
          "type": "text"
        },
        {
          "name": "puk",
          "type": "text"
        },
        {
          "name": "num_tel",
          "type": "number"
        },
        {
          "name": "modele_id",
          "type": "number"
        },
        {
          "name": "equipe_id",
          "type": "number"
        },
        {
          "name": "sect_emp",
          "type": "number"
        },
        {
          "name": "num_serie",
          "type": "text"
        },
        {
          "name": "date_achat",
          "type": "datetime"
        },
        {
          "name": "annee_production",
          "type": "number"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "id_modele",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "ref_model",
          "type": "text"
        },
        {
          "name": "model_annee",
          "type": "number"
        },
        {
          "name": "img",
          "type": "text"
        },
        {
          "name": "type_appareil",
          "type": "text"
        },
        {
          "name": "prix",
          "type": "number"
        },
        {
          "name": "ref_court",
          "type": "text"
        }
      ],
      "outputType": "text"
    },
    "searchData": {
      "meta": null,
      "outputType": "text"
    },
    "logDataView": {
      "meta": [
        {
          "name": "id_log",
          "type": "number"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "sim_id",
          "type": "number"
        },
        {
          "name": "employe_id",
          "type": "number"
        },
        {
          "name": "tsp_id",
          "type": "number"
        },
        {
          "name": "deleted",
          "type": "text"
        },
        {
          "name": "matricule",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "id_client",
          "type": "number"
        },
        {
          "name": "a_init",
          "type": "text"
        },
        {
          "name": "id_machine",
          "type": "number"
        },
        {
          "name": "poste_mobile",
          "type": "text"
        },
        {
          "name": "connecte",
          "type": "text"
        },
        {
          "name": "poste_encours",
          "type": "number"
        },
        {
          "name": "dern_conn",
          "type": "datetime"
        },
        {
          "name": "dern_deconn",
          "type": "datetime"
        },
        {
          "name": "mess",
          "type": "text"
        },
        {
          "name": "date_mess",
          "type": "datetime"
        },
        {
          "name": "mess_lu",
          "type": "text"
        },
        {
          "name": "inst_vers",
          "type": "number"
        },
        {
          "name": "inst_urgence",
          "type": "text"
        },
        {
          "name": "statut",
          "type": "number"
        },
        {
          "name": "droit_au_quota",
          "type": "text"
        },
        {
          "name": "equipe",
          "type": "text"
        },
        {
          "name": "app_version",
          "type": "text"
        },
        {
          "name": "date_visite",
          "type": "datetime"
        },
        {
          "name": "person_visite",
          "type": "text"
        },
        {
          "name": "user_tsptest",
          "type": "text"
        },
        {
          "name": "motpasse",
          "type": "text"
        },
        {
          "name": "password_salt",
          "type": "text"
        },
        {
          "name": "password_hash",
          "type": "text"
        }
      ],
      "outputType": "text"
    },
    "tableRepeat4": {
      "meta": [
        {
          "name": "id_log",
          "type": "number"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "sim_id",
          "type": "number"
        },
        {
          "name": "employe_id",
          "type": "number"
        },
        {
          "name": "tsp_id",
          "type": "number"
        },
        {
          "name": "deleted",
          "type": "text"
        },
        {
          "name": "matricule",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "id_client",
          "type": "number"
        },
        {
          "name": "a_init",
          "type": "text"
        },
        {
          "name": "id_machine",
          "type": "number"
        },
        {
          "name": "poste_mobile",
          "type": "text"
        },
        {
          "name": "connecte",
          "type": "text"
        },
        {
          "name": "poste_encours",
          "type": "number"
        },
        {
          "name": "dern_conn",
          "type": "datetime"
        },
        {
          "name": "dern_deconn",
          "type": "datetime"
        },
        {
          "name": "mess",
          "type": "text"
        },
        {
          "name": "date_mess",
          "type": "datetime"
        },
        {
          "name": "mess_lu",
          "type": "text"
        },
        {
          "name": "inst_vers",
          "type": "number"
        },
        {
          "name": "inst_urgence",
          "type": "text"
        },
        {
          "name": "statut",
          "type": "number"
        },
        {
          "name": "droit_au_quota",
          "type": "text"
        },
        {
          "name": "equipe",
          "type": "text"
        },
        {
          "name": "app_version",
          "type": "text"
        },
        {
          "name": "date_visite",
          "type": "datetime"
        },
        {
          "name": "person_visite",
          "type": "text"
        },
        {
          "name": "user_tsptest",
          "type": "text"
        },
        {
          "name": "motpasse",
          "type": "text"
        },
        {
          "name": "password_salt",
          "type": "text"
        },
        {
          "name": "password_hash",
          "type": "text"
        }
      ],
      "outputType": "text"
    },
    "accssoireDataView": {
      "meta": [
        {
          "name": "id_affect",
          "type": "number"
        },
        {
          "name": "id_tsp",
          "type": "number"
        },
        {
          "name": "id_employe",
          "type": "number"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "id_accessoire",
          "type": "number"
        },
        {
          "name": "id_tsp",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "code_tsp",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "releveur",
          "type": "number"
        },
        {
          "name": "syns_path",
          "type": "text"
        },
        {
          "name": "archive_path",
          "type": "text"
        },
        {
          "name": "syns_path_win7",
          "type": "text"
        },
        {
          "name": "pin",
          "type": "text"
        },
        {
          "name": "puk",
          "type": "text"
        },
        {
          "name": "num_tel",
          "type": "number"
        },
        {
          "name": "modele_id",
          "type": "number"
        },
        {
          "name": "equipe_id",
          "type": "number"
        },
        {
          "name": "sect_emp",
          "type": "number"
        },
        {
          "name": "num_serie",
          "type": "text"
        },
        {
          "name": "date_achat",
          "type": "datetime"
        },
        {
          "name": "annee_production",
          "type": "number"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "id_modele",
          "type": "number"
        },
        {
          "name": "nom",
          "type": "text"
        },
        {
          "name": "date_crea",
          "type": "datetime"
        },
        {
          "name": "user_crea",
          "type": "number"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "ref_model",
          "type": "text"
        },
        {
          "name": "model_annee",
          "type": "number"
        },
        {
          "name": "img",
          "type": "text"
        },
        {
          "name": "type_appareil",
          "type": "text"
        },
        {
          "name": "prix",
          "type": "number"
        },
        {
          "name": "ref_court",
          "type": "text"
        }
      ],
      "outputType": "text"
    }
  },
  "addTsp": {
    "nomNouveauAppareil": [
      {
        "type": "number",
        "name": "data",
        "sub": [
          {
            "type": "text"
          },
          {
            "type": "text"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "listModelTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdModele"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "RefModel"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "listEquipe": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "CodeTable"
          },
          {
            "type": "number",
            "name": "IdLigne"
          },
          {
            "type": "text",
            "name": "LibCourt"
          },
          {
            "type": "text",
            "name": "LibLong"
          },
          {
            "type": "text",
            "name": "NomTable"
          },
          {
            "type": "number",
            "name": "CodeLigne"
          },
          {
            "type": "text",
            "name": "CodeSuppr"
          },
          {
            "type": "number",
            "name": "IdParent"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "datastore1": [
      {
        "type": "number",
        "name": "IdTsp"
      },
      {
        "type": "text",
        "name": "DateCrea"
      },
      {
        "type": "text",
        "name": "Nom"
      },
      {
        "type": "number",
        "name": "CodeTsp"
      },
      {
        "type": "number",
        "name": "SectEmp"
      },
      {
        "type": "number",
        "name": "ModelId"
      }
    ],
    "newTspDataStore": [
      {
        "type": "number",
        "name": "SectEmp"
      },
      {
        "type": "number",
        "name": "ModeleId"
      },
      {
        "type": "number",
        "name": "CodeTsp"
      },
      {
        "type": "text",
        "name": "DateCrea"
      },
      {
        "type": "text",
        "name": "Nom"
      },
      {
        "type": "number",
        "name": "IdTsp"
      }
    ],
    "apiform1": [
      {
        "type": "array",
        "name": "data"
      },
      {
        "type": "object",
        "name": "headers"
      }
    ],
    "api1": [
      {
        "type": "array",
        "name": "data"
      },
      {
        "type": "object",
        "name": "headers"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ]
  },
  "allsim": {
    "sims": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdSim"
          },
          {
            "type": "number",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "Pin"
          },
          {
            "type": "text",
            "name": "Puk"
          },
          {
            "type": "text",
            "name": "CreatedBy"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "object",
            "name": "affectation",
            "sub": [
              {
                "type": "number",
                "name": "IdAffect"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "NomTsp"
              },
              {
                "type": "text",
                "name": "NomEmploye"
              },
              {
                "type": "text",
                "name": "affectedBy"
              },
              {
                "type": "text",
                "name": "Tsp"
              },
              {
                "type": "text",
                "name": "SimMobile"
              },
              {
                "type": "text",
                "name": "Employe"
              },
              {
                "type": "text",
                "name": "DateCreation"
              }
            ]
          },
          {
            "type": "array",
            "name": "logAffectationList",
            "sub": [
              {
                "type": "number",
                "name": "IdLog"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "text",
                "name": "TspName"
              },
              {
                "type": "text",
                "name": "EmployeName"
              },
              {
                "type": "text",
                "name": "SimNumber"
              },
              {
                "type": "text",
                "name": "affectedBy"
              },
              {
                "type": "text",
                "name": "Deleted"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "selectedSim": {
      "meta": [
        {
          "type": "number",
          "name": "IdSim"
        },
        {
          "type": "number",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "Pin"
        },
        {
          "type": "text",
          "name": "Puk"
        },
        {
          "type": "text",
          "name": "CreatedBy"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "object",
          "name": "affectation",
          "sub": [
            {
              "type": "number",
              "name": "IdAffect"
            },
            {
              "type": "number",
              "name": "UserCrea"
            },
            {
              "type": "text",
              "name": "NomTsp"
            },
            {
              "type": "text",
              "name": "NomEmploye"
            },
            {
              "type": "text",
              "name": "affectedBy"
            },
            {
              "type": "text",
              "name": "Tsp"
            },
            {
              "type": "text",
              "name": "SimMobile"
            },
            {
              "type": "text",
              "name": "Employe"
            },
            {
              "type": "text",
              "name": "DateCreation"
            }
          ]
        },
        {
          "type": "array",
          "name": "logAffectationList",
          "sub": [
            {
              "type": "number",
              "name": "IdLog"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "TspName"
            },
            {
              "type": "text",
              "name": "EmployeName"
            },
            {
              "type": "text",
              "name": "SimNumber"
            },
            {
              "type": "text",
              "name": "affectedBy"
            },
            {
              "type": "text",
              "name": "Deleted"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "allSimView": {
      "meta": [
        {
          "type": "number",
          "name": "IdSim"
        },
        {
          "type": "number",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "Pin"
        },
        {
          "type": "text",
          "name": "Puk"
        },
        {
          "type": "text",
          "name": "CreatedBy"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "object",
          "name": "affectation",
          "sub": [
            {
              "type": "number",
              "name": "IdAffect"
            },
            {
              "type": "number",
              "name": "UserCrea"
            },
            {
              "type": "text",
              "name": "NomTsp"
            },
            {
              "type": "text",
              "name": "NomEmploye"
            },
            {
              "type": "text",
              "name": "affectedBy"
            },
            {
              "type": "text",
              "name": "Tsp"
            },
            {
              "type": "text",
              "name": "SimMobile"
            },
            {
              "type": "text",
              "name": "Employe"
            },
            {
              "type": "text",
              "name": "DateCreation"
            }
          ]
        },
        {
          "type": "array",
          "name": "logAffectationList",
          "sub": [
            {
              "type": "number",
              "name": "IdLog"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "TspName"
            },
            {
              "type": "text",
              "name": "EmployeName"
            },
            {
              "type": "text",
              "name": "SimNumber"
            },
            {
              "type": "text",
              "name": "affectedBy"
            },
            {
              "type": "text",
              "name": "Deleted"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_view1": {
      "meta": null,
      "outputType": "object"
    },
    "searchData": {
      "meta": [
        {
          "type": "number",
          "name": "IdSim"
        },
        {
          "type": "number",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "Pin"
        },
        {
          "type": "text",
          "name": "Puk"
        },
        {
          "type": "text",
          "name": "CreatedBy"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "object",
          "name": "affectation",
          "sub": [
            {
              "type": "number",
              "name": "IdAffect"
            },
            {
              "type": "number",
              "name": "UserCrea"
            },
            {
              "type": "text",
              "name": "NomTsp"
            },
            {
              "type": "text",
              "name": "NomEmploye"
            },
            {
              "type": "text",
              "name": "affectedBy"
            },
            {
              "type": "text",
              "name": "Tsp"
            },
            {
              "type": "text",
              "name": "SimMobile"
            },
            {
              "type": "text",
              "name": "Employe"
            },
            {
              "type": "text",
              "name": "DateCreation"
            }
          ]
        },
        {
          "type": "array",
          "name": "logAffectationList",
          "sub": [
            {
              "type": "number",
              "name": "IdLog"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "TspName"
            },
            {
              "type": "text",
              "name": "EmployeName"
            },
            {
              "type": "text",
              "name": "SimNumber"
            },
            {
              "type": "text",
              "name": "affectedBy"
            },
            {
              "type": "text",
              "name": "Deleted"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "logDataView": {
      "meta": null,
      "outputType": "object"
    }
  },
  "navbar": {
    "localStorage": [
      {
        "type": "text",
        "name": "nom"
      },
      {
        "type": "number",
        "name": "matricule"
      }
    ]
  },
  "nouvellesim": {
    "localStorage": [
      {
        "type": "number",
        "name": "Matricule"
      }
    ]
  },
  "newSim": {
    "localStorage": [
      {
        "type": "number",
        "name": "matricule"
      },
      {
        "type": "text",
        "name": "token"
      }
    ]
  },
  "affectationTsp": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      },
      {
        "type": "number",
        "name": "matricule"
      }
    ],
    "api1": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAffect"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "NomTsp"
          },
          {
            "type": "text",
            "name": "NomEmploye"
          },
          {
            "type": "text",
            "name": "affectedBy"
          },
          {
            "type": "object",
            "name": "Tsp",
            "sub": [
              {
                "type": "number",
                "name": "IdTsp"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "CodeTsp"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "text",
                "name": "Releveur"
              },
              {
                "type": "text",
                "name": "SynsPath"
              },
              {
                "type": "text",
                "name": "ArchivePath"
              },
              {
                "type": "text",
                "name": "SynsPathWin7"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "NumTel"
              },
              {
                "type": "number",
                "name": "ModeleId"
              },
              {
                "type": "text",
                "name": "EquipeId"
              },
              {
                "type": "number",
                "name": "SectEmp"
              }
            ]
          },
          {
            "type": "object",
            "name": "SimMobile",
            "sub": [
              {
                "type": "number",
                "name": "IdSim"
              },
              {
                "type": "number",
                "name": "NumTel"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              }
            ]
          },
          {
            "type": "object",
            "name": "Employe",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "number",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "number",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "text",
            "name": "DateCreation"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "affecationList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAffect"
          },
          {
            "type": "object",
            "name": "Tsp",
            "sub": [
              {
                "type": "number",
                "name": "IdTsp"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "CodeTsp"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "Releveur"
              },
              {
                "type": "text",
                "name": "SynsPath"
              },
              {
                "type": "text",
                "name": "ArchivePath"
              },
              {
                "type": "text",
                "name": "SynsPathWin7"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "number",
                "name": "NumTel"
              },
              {
                "type": "text",
                "name": "ModeleId"
              },
              {
                "type": "text",
                "name": "EquipeId"
              },
              {
                "type": "text",
                "name": "SectEmp"
              }
            ]
          },
          {
            "type": "object",
            "name": "ModelTsp",
            "sub": [
              {
                "type": "number",
                "name": "IdModele"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "RefModel"
              },
              {
                "type": "text",
                "name": "Img"
              }
            ]
          },
          {
            "type": "object",
            "name": "SimMobile",
            "sub": [
              {
                "type": "number",
                "name": "IdSim"
              },
              {
                "type": "number",
                "name": "NumTel"
              },
              {
                "type": "text",
                "name": "Pin"
              },
              {
                "type": "text",
                "name": "Puk"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              }
            ]
          },
          {
            "type": "object",
            "name": "Employe",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "number",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "number",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "object",
            "name": "UserCrea",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "text",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "text",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          },
          {
            "type": "text",
            "name": "DateCreation"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "selectedAffecation": {
      "meta": [
        {
          "type": "number",
          "name": "IdAffect"
        },
        {
          "type": "number",
          "name": "UserCrea"
        },
        {
          "type": "text",
          "name": "NomTsp"
        },
        {
          "type": "text",
          "name": "NomEmploye"
        },
        {
          "type": "text",
          "name": "affectedBy"
        },
        {
          "type": "object",
          "name": "Tsp",
          "sub": [
            {
              "type": "number",
              "name": "IdTsp"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "CodeTsp"
            },
            {
              "type": "text",
              "name": "Description"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "Releveur"
            },
            {
              "type": "text",
              "name": "SynsPath"
            },
            {
              "type": "text",
              "name": "ArchivePath"
            },
            {
              "type": "text",
              "name": "SynsPathWin7"
            },
            {
              "type": "text",
              "name": "Pin"
            },
            {
              "type": "text",
              "name": "Puk"
            },
            {
              "type": "text",
              "name": "NumTel"
            },
            {
              "type": "number",
              "name": "ModeleId"
            },
            {
              "type": "text",
              "name": "EquipeId"
            },
            {
              "type": "number",
              "name": "SectEmp"
            }
          ]
        },
        {
          "type": "object",
          "name": "SimMobile",
          "sub": [
            {
              "type": "number",
              "name": "IdSim"
            },
            {
              "type": "number",
              "name": "NumTel"
            },
            {
              "type": "text",
              "name": "Pin"
            },
            {
              "type": "text",
              "name": "Puk"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "number",
              "name": "UserCrea"
            }
          ]
        },
        {
          "type": "object",
          "name": "Employe",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "number",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "number",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "number",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "text",
          "name": "DateCreation"
        }
      ],
      "outputType": "array"
    },
    "newAffectation": {
      "meta": null,
      "outputType": "object"
    },
    "tspNonAffectList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "Releveur"
          },
          {
            "type": "text",
            "name": "SynsPath"
          },
          {
            "type": "text",
            "name": "ArchivePath"
          },
          {
            "type": "text",
            "name": "SynsPathWin7"
          },
          {
            "type": "text",
            "name": "Pin"
          },
          {
            "type": "text",
            "name": "Puk"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "EquipeId"
          },
          {
            "type": "text",
            "name": "SectEmp"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "simNonAffecteList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdSim"
          },
          {
            "type": "number",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "Pin"
          },
          {
            "type": "text",
            "name": "Puk"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "UserCrea"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "sectionsList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "CodeTable"
          },
          {
            "type": "number",
            "name": "IdLigne"
          },
          {
            "type": "text",
            "name": "LibCourt"
          },
          {
            "type": "text",
            "name": "LibLong"
          },
          {
            "type": "text",
            "name": "NomTable"
          },
          {
            "type": "number",
            "name": "CodeLigne"
          },
          {
            "type": "text",
            "name": "CodeSuppr"
          },
          {
            "type": "number",
            "name": "IdParent"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "dataViewAffectation": {
      "meta": [
        {
          "type": "number",
          "name": "IdAffect"
        },
        {
          "type": "number",
          "name": "UserCrea"
        },
        {
          "type": "text",
          "name": "NomTsp"
        },
        {
          "type": "text",
          "name": "NomEmploye"
        },
        {
          "type": "text",
          "name": "affectedBy"
        },
        {
          "type": "object",
          "name": "Tsp",
          "sub": [
            {
              "type": "number",
              "name": "IdTsp"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "CodeTsp"
            },
            {
              "type": "text",
              "name": "Description"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "text",
              "name": "Releveur"
            },
            {
              "type": "text",
              "name": "SynsPath"
            },
            {
              "type": "text",
              "name": "ArchivePath"
            },
            {
              "type": "text",
              "name": "SynsPathWin7"
            },
            {
              "type": "text",
              "name": "Pin"
            },
            {
              "type": "text",
              "name": "Puk"
            },
            {
              "type": "text",
              "name": "NumTel"
            },
            {
              "type": "number",
              "name": "ModeleId"
            },
            {
              "type": "text",
              "name": "EquipeId"
            },
            {
              "type": "number",
              "name": "SectEmp"
            }
          ]
        },
        {
          "type": "object",
          "name": "SimMobile",
          "sub": [
            {
              "type": "number",
              "name": "IdSim"
            },
            {
              "type": "number",
              "name": "NumTel"
            },
            {
              "type": "text",
              "name": "Pin"
            },
            {
              "type": "text",
              "name": "Puk"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "number",
              "name": "UserCrea"
            }
          ]
        },
        {
          "type": "object",
          "name": "Employe",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "number",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "number",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "number",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        },
        {
          "type": "text",
          "name": "DateCreation"
        }
      ],
      "outputType": "array"
    },
    "employeNonAffecteList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Matricule"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "number",
            "name": "IdClient"
          },
          {
            "type": "text",
            "name": "AInit"
          },
          {
            "type": "text",
            "name": "IdMachine"
          },
          {
            "type": "text",
            "name": "PosteMobile"
          },
          {
            "type": "text",
            "name": "Connecte"
          },
          {
            "type": "number",
            "name": "PosteEncours"
          },
          {
            "type": "text",
            "name": "DernConn"
          },
          {
            "type": "text",
            "name": "DernDeconn"
          },
          {
            "type": "text",
            "name": "Mess"
          },
          {
            "type": "text",
            "name": "DateMess"
          },
          {
            "type": "text",
            "name": "MessLu"
          },
          {
            "type": "text",
            "name": "InstVers"
          },
          {
            "type": "text",
            "name": "InstUrgence"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "DroitAuQuota"
          },
          {
            "type": "text",
            "name": "Equipe"
          },
          {
            "type": "text",
            "name": "AppVersion"
          },
          {
            "type": "text",
            "name": "DateVisite"
          },
          {
            "type": "text",
            "name": "PersonVisite"
          },
          {
            "type": "text",
            "name": "UserTsptest"
          },
          {
            "type": "text",
            "name": "PasswordSalt"
          },
          {
            "type": "text",
            "name": "PasswordHash"
          },
          {
            "type": "text",
            "name": "Motpasse"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "allBordereau": {
    "periodeApi": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdPeriode"
          },
          {
            "type": "text",
            "name": "NomPeriode"
          },
          {
            "type": "number",
            "name": "Duree"
          },
          {
            "type": "text",
            "name": "DatePeriode"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "lotfacApi": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "NumLotFac"
          },
          {
            "type": "number",
            "name": "NumGrFac"
          },
          {
            "type": "number",
            "name": "NumCellule"
          },
          {
            "type": "text",
            "name": "Libelle"
          },
          {
            "type": "text",
            "name": "Impute"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "releveurApi": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Matricule"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "cellule"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "suiviBordereauApi": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Periode"
          },
          {
            "type": "number",
            "name": "Tournee"
          },
          {
            "type": "number",
            "name": "Bordereau"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "Libcourt"
          },
          {
            "type": "boolean",
            "name": "Checked"
          },
          {
            "type": "text",
            "name": "SuivieAnomalie"
          },
          {
            "type": "text",
            "name": "DateMaj"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "UserMaj"
          },
          {
            "type": "object",
            "name": "Releveur",
            "sub": [
              {
                "type": "number",
                "name": "Matricule"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "number",
                "name": "IdClient"
              },
              {
                "type": "text",
                "name": "AInit"
              },
              {
                "type": "text",
                "name": "IdMachine"
              },
              {
                "type": "text",
                "name": "PosteMobile"
              },
              {
                "type": "text",
                "name": "Connecte"
              },
              {
                "type": "number",
                "name": "PosteEncours"
              },
              {
                "type": "text",
                "name": "DernConn"
              },
              {
                "type": "text",
                "name": "DernDeconn"
              },
              {
                "type": "text",
                "name": "Mess"
              },
              {
                "type": "text",
                "name": "DateMess"
              },
              {
                "type": "text",
                "name": "MessLu"
              },
              {
                "type": "number",
                "name": "InstVers"
              },
              {
                "type": "text",
                "name": "InstUrgence"
              },
              {
                "type": "number",
                "name": "Statut"
              },
              {
                "type": "text",
                "name": "DroitAuQuota"
              },
              {
                "type": "text",
                "name": "Equipe"
              },
              {
                "type": "text",
                "name": "AppVersion"
              },
              {
                "type": "text",
                "name": "DateVisite"
              },
              {
                "type": "text",
                "name": "PersonVisite"
              },
              {
                "type": "text",
                "name": "UserTsptest"
              },
              {
                "type": "text",
                "name": "PasswordSalt"
              },
              {
                "type": "text",
                "name": "PasswordHash"
              },
              {
                "type": "text",
                "name": "Motpasse"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "lotsuivibordereau": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdLigne"
          },
          {
            "type": "number",
            "name": "Periode"
          },
          {
            "type": "number",
            "name": "Bordereau"
          },
          {
            "type": "number",
            "name": "Tournee"
          },
          {
            "type": "number",
            "name": "Mat"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "number",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "StatutAno"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "Supprimer"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "bordereauNonAttribu": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Periode"
          },
          {
            "type": "number",
            "name": "Tournee"
          },
          {
            "type": "number",
            "name": "Bordereau"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "Libcourt"
          },
          {
            "type": "boolean",
            "name": "Checked"
          },
          {
            "type": "text",
            "name": "SuivieAnomalie"
          },
          {
            "type": "text",
            "name": "DateMaj"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserMaj"
          },
          {
            "type": "text",
            "name": "Releveur"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "suiviebOrdereauView": {
      "meta": [
        {
          "type": "number",
          "name": "Periode"
        },
        {
          "type": "number",
          "name": "Tournee"
        },
        {
          "type": "number",
          "name": "Bordereau"
        },
        {
          "type": "number",
          "name": "Statut"
        },
        {
          "type": "text",
          "name": "Libcourt"
        },
        {
          "type": "boolean",
          "name": "Checked"
        },
        {
          "type": "text",
          "name": "SuivieAnomalie"
        },
        {
          "type": "text",
          "name": "DateMaj"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "number",
          "name": "UserMaj"
        },
        {
          "type": "object",
          "name": "Releveur",
          "sub": [
            {
              "type": "number",
              "name": "Matricule"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "number",
              "name": "IdClient"
            },
            {
              "type": "text",
              "name": "AInit"
            },
            {
              "type": "text",
              "name": "IdMachine"
            },
            {
              "type": "text",
              "name": "PosteMobile"
            },
            {
              "type": "text",
              "name": "Connecte"
            },
            {
              "type": "number",
              "name": "PosteEncours"
            },
            {
              "type": "text",
              "name": "DernConn"
            },
            {
              "type": "text",
              "name": "DernDeconn"
            },
            {
              "type": "text",
              "name": "Mess"
            },
            {
              "type": "text",
              "name": "DateMess"
            },
            {
              "type": "text",
              "name": "MessLu"
            },
            {
              "type": "number",
              "name": "InstVers"
            },
            {
              "type": "text",
              "name": "InstUrgence"
            },
            {
              "type": "number",
              "name": "Statut"
            },
            {
              "type": "text",
              "name": "DroitAuQuota"
            },
            {
              "type": "text",
              "name": "Equipe"
            },
            {
              "type": "text",
              "name": "AppVersion"
            },
            {
              "type": "text",
              "name": "DateVisite"
            },
            {
              "type": "text",
              "name": "PersonVisite"
            },
            {
              "type": "text",
              "name": "UserTsptest"
            },
            {
              "type": "text",
              "name": "PasswordSalt"
            },
            {
              "type": "text",
              "name": "PasswordHash"
            },
            {
              "type": "text",
              "name": "Motpasse"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "addTournee": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "listLieuGeo": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "NumLieugeo"
          },
          {
            "type": "text",
            "name": "Libelle"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "lotfacList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "NumLotFac"
          },
          {
            "type": "number",
            "name": "NumGrFac"
          },
          {
            "type": "number",
            "name": "NumCellule"
          },
          {
            "type": "text",
            "name": "Libelle"
          },
          {
            "type": "text",
            "name": "Impute"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "listZoneGeo": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "NumZone"
          },
          {
            "type": "text",
            "name": "NumLieugeo"
          },
          {
            "type": "number",
            "name": "NumCellule"
          },
          {
            "type": "number",
            "name": "GroupeFac"
          },
          {
            "type": "text",
            "name": "NomZone"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "allTournee": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "getTournees": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "NumTourne"
          },
          {
            "type": "text",
            "name": "LieuGeo"
          },
          {
            "type": "text",
            "name": "ZoneGeo"
          },
          {
            "type": "number",
            "name": "LotFac"
          },
          {
            "type": "number",
            "name": "NombrePl"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "addAccessoires": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "listModelAccesoires": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdType"
          },
          {
            "type": "text",
            "name": "Nom"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "affectAccessoires": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "existingAccessories": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAccessoire"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "object",
            "name": "TypeAccessoire",
            "sub": [
              {
                "type": "number",
                "name": "IdType"
              },
              {
                "type": "text",
                "name": "Nom"
              }
            ]
          },
          {
            "type": "text",
            "name": "affectationAccessoire"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "availableAccessories": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdAccessoire"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "object",
            "name": "TypeAccessoire",
            "sub": [
              {
                "type": "number",
                "name": "IdType"
              },
              {
                "type": "text",
                "name": "Nom"
              }
            ]
          },
          {
            "type": "text",
            "name": "affectationAccessoire"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "AppareilModelPartial": {
    "models": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdModele"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "RefModel"
          },
          {
            "type": "text",
            "name": "Img"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "ModelViewData": {
      "meta": [
        {
          "type": "number",
          "name": "IdModele"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "number",
          "name": "UserCrea"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "RefModel"
        }
      ],
      "outputType": "array"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      },
      {
        "type": "number",
        "name": "matricule"
      }
    ]
  },
  "allAppareils": {
    "tsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "Releveur"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "EquipeName"
          },
          {
            "type": "text",
            "name": "EmployeName"
          },
          {
            "type": "array",
            "name": "logAffectation"
          },
          {
            "type": "text",
            "name": "affectation"
          },
          {
            "type": "object",
            "name": "Model",
            "sub": [
              {
                "type": "number",
                "name": "IdModele"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "RefModel"
              },
              {
                "type": "text",
                "name": "Img"
              }
            ]
          },
          {
            "type": "array",
            "name": "suiviBorderau"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "searchData": {
      "meta": [
        {
          "type": "number",
          "name": "IdTsp"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "CodeTsp"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "number",
          "name": "Releveur"
        },
        {
          "type": "text",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "ModeleId"
        },
        {
          "type": "text",
          "name": "EquipeName"
        },
        {
          "type": "text",
          "name": "EmployeName"
        },
        {
          "type": "array",
          "name": "logAffectation"
        },
        {
          "type": "text",
          "name": "affectation"
        },
        {
          "type": "array",
          "name": "suiviBorderau"
        }
      ],
      "outputType": "array"
    },
    "logDataView": {
      "meta": null,
      "outputType": "array"
    },
    "selectedTsp": {
      "meta": [
        {
          "type": "number",
          "name": "IdTsp"
        },
        {
          "type": "text",
          "name": "Nom"
        },
        {
          "type": "text",
          "name": "CodeTsp"
        },
        {
          "type": "text",
          "name": "Description"
        },
        {
          "type": "text",
          "name": "DateCrea"
        },
        {
          "type": "number",
          "name": "Releveur"
        },
        {
          "type": "text",
          "name": "NumTel"
        },
        {
          "type": "text",
          "name": "ModeleId"
        },
        {
          "type": "text",
          "name": "EquipeName"
        },
        {
          "type": "text",
          "name": "EmployeName"
        },
        {
          "type": "array",
          "name": "logAffectation"
        },
        {
          "type": "text",
          "name": "affectation"
        },
        {
          "type": "object",
          "name": "Model",
          "sub": [
            {
              "type": "number",
              "name": "IdModele"
            },
            {
              "type": "text",
              "name": "Nom"
            },
            {
              "type": "text",
              "name": "DateCrea"
            },
            {
              "type": "number",
              "name": "UserCrea"
            },
            {
              "type": "text",
              "name": "Description"
            },
            {
              "type": "text",
              "name": "RefModel"
            },
            {
              "type": "text",
              "name": "Img"
            }
          ]
        },
        {
          "type": "array",
          "name": "suiviBorderau"
        }
      ],
      "outputType": "array"
    }
  },
  "footer": {
    "localStorage": [
      {
        "type": "text",
        "name": "nom"
      },
      {
        "type": "number",
        "name": "matricule"
      }
    ]
  },
  "appareils": {
    "tsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdTsp"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "CodeTsp"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "number",
            "name": "Releveur"
          },
          {
            "type": "text",
            "name": "NumTel"
          },
          {
            "type": "text",
            "name": "ModeleId"
          },
          {
            "type": "text",
            "name": "EquipeName"
          },
          {
            "type": "text",
            "name": "EmployeName"
          },
          {
            "type": "array",
            "name": "LogAffectation"
          },
          {
            "type": "object",
            "name": "Affectation",
            "sub": [
              {
                "type": "number",
                "name": "IdAffect"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "NomTsp"
              },
              {
                "type": "text",
                "name": "NomEmploye"
              },
              {
                "type": "text",
                "name": "affectedBy"
              },
              {
                "type": "text",
                "name": "Tsp"
              },
              {
                "type": "text",
                "name": "SimMobile"
              },
              {
                "type": "text",
                "name": "Employe"
              },
              {
                "type": "text",
                "name": "DateCreation"
              }
            ]
          },
          {
            "type": "array",
            "name": "ListAccessoire"
          },
          {
            "type": "array",
            "name": "ListProbleme"
          },
          {
            "type": "object",
            "name": "Model",
            "sub": [
              {
                "type": "number",
                "name": "IdModele"
              },
              {
                "type": "text",
                "name": "Nom"
              },
              {
                "type": "text",
                "name": "DateCrea"
              },
              {
                "type": "number",
                "name": "UserCrea"
              },
              {
                "type": "text",
                "name": "Description"
              },
              {
                "type": "text",
                "name": "RefModel"
              },
              {
                "type": "text",
                "name": "Img"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      },
      {
        "type": "text",
        "name": "matricule"
      }
    ],
    "listModelTsp": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdModele"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "RefModel"
          },
          {
            "type": "text",
            "name": "Img"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "getEmployeByIdSection": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "Matricule"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "number",
            "name": "IdClient"
          },
          {
            "type": "text",
            "name": "AInit"
          },
          {
            "type": "text",
            "name": "IdMachine"
          },
          {
            "type": "text",
            "name": "PosteMobile"
          },
          {
            "type": "text",
            "name": "Connecte"
          },
          {
            "type": "number",
            "name": "PosteEncours"
          },
          {
            "type": "text",
            "name": "DernConn"
          },
          {
            "type": "text",
            "name": "DernDeconn"
          },
          {
            "type": "text",
            "name": "Mess"
          },
          {
            "type": "text",
            "name": "DateMess"
          },
          {
            "type": "text",
            "name": "MessLu"
          },
          {
            "type": "text",
            "name": "InstVers"
          },
          {
            "type": "text",
            "name": "InstUrgence"
          },
          {
            "type": "number",
            "name": "Statut"
          },
          {
            "type": "text",
            "name": "DroitAuQuota"
          },
          {
            "type": "text",
            "name": "Equipe"
          },
          {
            "type": "text",
            "name": "AppVersion"
          },
          {
            "type": "text",
            "name": "DateVisite"
          },
          {
            "type": "text",
            "name": "PersonVisite"
          },
          {
            "type": "text",
            "name": "UserTsptest"
          },
          {
            "type": "text",
            "name": "PasswordSalt"
          },
          {
            "type": "text",
            "name": "PasswordHash"
          },
          {
            "type": "text",
            "name": "Motpasse"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "sectionsList": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "CodeTable"
          },
          {
            "type": "number",
            "name": "IdLigne"
          },
          {
            "type": "text",
            "name": "LibCourt"
          },
          {
            "type": "text",
            "name": "LibLong"
          },
          {
            "type": "text",
            "name": "NomTable"
          },
          {
            "type": "number",
            "name": "CodeLigne"
          },
          {
            "type": "text",
            "name": "CodeSuppr"
          },
          {
            "type": "number",
            "name": "IdParent"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ]
  },
  "models": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "models": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "IdModele"
          },
          {
            "type": "text",
            "name": "Nom"
          },
          {
            "type": "text",
            "name": "DateCrea"
          },
          {
            "type": "text",
            "name": "UserCrea"
          },
          {
            "type": "text",
            "name": "Description"
          },
          {
            "type": "text",
            "name": "RefModel"
          },
          {
            "type": "text",
            "name": "Img"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "ModelViewData": {
      "meta": [
        {
          "type": "number",
          "name": "id_modele"
        },
        {
          "type": "text",
          "name": "nom"
        },
        {
          "type": "datetime",
          "name": "date_crea"
        },
        {
          "type": "number",
          "name": "user_crea"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "ref_model"
        },
        {
          "type": "number",
          "name": "model_annee"
        },
        {
          "type": "text",
          "name": "img"
        },
        {
          "type": "text",
          "name": "type_appareil"
        },
        {
          "type": "number",
          "name": "prix"
        },
        {
          "type": "text",
          "name": "ref_court"
        }
      ],
      "outputType": "array"
    }
  }
});
