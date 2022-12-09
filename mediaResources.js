/*Imagenes de las clases seleccionables por raza y genero*/
const assasinImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/igWDLOj.png",
        female: ""
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/USIQtEb.png",
        female: new Image().src = "https://i.imgur.com/9Sqe8ME.png"
    },
    orc: {
        male: "",
        female: new Image().src = "https://i.imgur.com/uzaD2L5.png"
    },
    dwarf: {
        male: "",
        female: ""
    }
}

const barbarianImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/nUDphU4.png",
        female: new Image().src = "https://i.imgur.com/KBBQG8b.png"
    },
    elf: {
        male: new Image().src = "",
        female: new Image().src = ""
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/0A3Rm8K.png",
        female: new Image().src = "https://i.imgur.com/9njgtd0.png"
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/uAQfgpo.png",
        female: new Image().src = "https://i.imgur.com/5bVjNDB.png"
    }
}

const berzerkerImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/6WbdhJx.png",
        female: new Image().src = "https://i.imgur.com/NwcU00v.png"
    },
    elf: {
        male: "",
        female: ""
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/skBm0fj.png",
    },
    dwarf: {
        male: "",
        female: ""
    }
}

const casterImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/aEAWOy2.png",
        female: new Image().src = "https://i.imgur.com/32iUoVl.png"
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/8Vp5na6.png",
        female: new Image().src = "https://i.imgur.com/z6daOLY.png"
    },
    orc: {
        male: "",
        female: ""
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/bgaudC8.png",
        female: ""
    }
}

const celestialDefenderImg = {
    elf: {
        male: new Image().src = "https://i.imgur.com/4lYJq5N.png",
        female: ""
    }
}

const crusaderImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/3iZExzD.png",
        female: new Image().src =  "https://i.imgur.com/23UlmAL.png"
    }
}

const dragonTaimerImg = {
    elf: {
        male: "",
        female: new Image().src = "https://i.imgur.com/bt11zNT.png"
    }
}

const explorerImg = {
    dwarf: {
        male: new Image().src = "https://i.imgur.com/ROdxAjq.png",
        female: new Image().src = "https://i.imgur.com/ABvHxed.png"
    }
}

const fighterImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/OHpp7Oo.png",
        female: new Image().src = "https://i.imgur.com/DiltIzz.png"
    },
    elf: {
        male: "",
        female: ""
    },
    orc: {
        male: "",
        female: new Image().src = "https://i.imgur.com/c39qO0y.png"
    },
    dwarf: {
        male: "",
        female: ""
    }
}

const hunterImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/lPGuCPn.png",
        female: ""
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/dxjGWOD.png",
        female: new Image().src = "https://i.imgur.com/IO9Ml0s.png"
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/7tiOEWc.png",
        female: new Image().src = "https://i.imgur.com/l2cLuvF.png"
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/yQDyyGN.png",
        female: ""
    }
}

const ironLordImg = {
    dwarf: {
        male: new Image().src = "https://i.imgur.com/qCMYqd8.png",
        female: ""
    }
}

const knightImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/2cxk7Ln.png",
        female: new Image().src = "https://i.imgur.com/xavsi52.png"
    },
    elf: {
        male: "",
        female: new Image().src = "https://i.imgur.com/y4MBR12.png"
    }
}

const monkImg = {
    human: {
        male: "",
        female: new Image().src = "https://i.imgur.com/FgALwiY.png"
    }
}

const necromancerImg = {
    orc: {
        male: new Image().src = "https://i.imgur.com/YiX1bSK.png",
        female: ""
    }
}

const paladinImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/ghHCjd5.png",
        female: new Image().src = "https://i.imgur.com/4m53eJ6.jpg"
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/VrxPw6E.png",
        female: new Image().src = "https://i.imgur.com/0aUfDoo.png"
    },
    orc: {
        male: "",
        female: ""
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/ery07m6.png",
        female: new Image().src = "https://i.imgur.com/ghxnEFr.png"
    }
}

const priestImg = {
    human: {
        male: "",
        female: new Image().src = "https://i.imgur.com/49zMDpm.png"
    },
    elf: {
        male: "",
        female: new Image().src = "https://i.imgur.com/juUKHdF.png"
    },
    orc: {
        male: "",
        female: new Image().src = "https://i.imgur.com/t5WSRon.png"
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/7JYAj6C.png",
        female: new Image().src ="https://i.imgur.com/X4iN0Mn.png"
    }
}

const rangerImg = {
    human: {
        male: "",
        female: new Image().src = "https://i.imgur.com/TZ2caiQ.png"
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/UKpJDDD.png",
        female: new Image().src = "https://i.imgur.com/o6zCwsW.png"
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/N2CTDqa.png",
        female: new Image().src = "https://i.imgur.com/PngUT3v.png"
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/jl1JXe4.png",
        female: new Image().src = "https://i.imgur.com/DT63NQS.png"
    }
}

const shamanImg = {
    human: {
        male: "",
        female: new Image().src = "https://i.imgur.com/pYzAkKU.png"
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/vhl2xjJ.png",
        female: ""
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/ftr2oMa.png",
        female: ""
    }

}

const warchiefImg = {
    orc: {
        male: new Image().src = "https://i.imgur.com/jHBA2I4.png",
        female: ""
    }
}

const warlockImg = {
    human: {
        male: "",
        female: new Image().src = "https://i.imgur.com/uasLdpu.png"
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/tjnOHmO.png",
        female: new Image().src = "https://i.imgur.com/OHwUOfr.png"
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/fzkwQo2.png",
        female: new Image().src = "https://i.imgur.com/Z5qEmAt.png"
    },
    dwarf: {
        male: new Image().src = "https://i.imgur.com/e3PbGvu.png",
        female: ""
    }
}

const warriorImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/5YGdKHn.png",
        female: new Image().src = "https://i.imgur.com/NRfSBw9.png"
    },
    elf: {
        male: new Image().src = "https://i.imgur.com/zPFPUxv.png",
        female: new Image().src ="https://i.imgur.com/FoSH4XU.png"
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/sWlqn1t.png",
        female: new Image().src ="https://i.imgur.com/WCg7MMH.png"
    },
    dwarf: {
        male: new Image().src ="https://i.imgur.com/syipRkn.png",
        female: ""
    }
}


/*

const bardImg = {
    human: {
        male: new Image().src = "https://i.imgur.com/kfBCU27.png",
        female: new Image().src = "https://i.imgur.com/rETBX2v.png"
    },
    orc: {
        male: new Image().src = "https://i.imgur.com/dex8chU.png",
    }
}

const druidImg = {
    human: {
        male: ,
        female: new Image().src = "https://i.imgur.com/ltJW69l.png" 
    }
    elf: {
        male: new Image().src = "https://i.imgur.com/ibHlYex.png",
        female: 
    }
}

const samuraiImg = {
    human: {
        male: new Image().src = https://i.imgur.com/FZ9qrlM.png,
        female: new Image().src = https://i.imgur.com/GfXfHTv.png
    }
    elf: {
        male: new Image().src = https://i.imgur.com/nTkb883.png,
        female:
    }
} 

const riderImg = {
    human: {
        male: new Image().src =https://i.imgur.com/UqbSsnk.png,
        female:new Image().src =  https://i.imgur.com/XQKliij.png
    },
    orc: {
        male: new Image().src =https://i.imgur.com/hAJ4VDY.png,
        female:
    }
}

const gunslingerImg = {
    human: {
        male: "",
        female: new Image().src = https://i.imgur.com/gUCrieh.png
    }
}
*/