export const mockData=[
    {
        id:1,
        name:"Folder 1",
        type:"folder",
        innerContent:[
            {
                id:2,
                name:"File 1",
                type:"file",
            },
            {
                id:3,
                name:"File 2",
                type:"file",
            },
            {
                id:4,
                name:"File 3",
                type:"file",
            },
            {
                id:5,
                name:"Inner Folder 1",
                type:"folder",
                innerContent: [
                    {
                        id:6,
                        name:"Inner Folder File 1",
                        type:"file",
                    },
                    {
                        id:7,
                        name:"Inner Folder File 2",
                        type:"file",
                    },
                    {
                        id:8,
                        name:"Inner Folder File 3",
                        type:"file",
                    },
                ]
            }
        ]
    },
    {
        id: 9,
        name:"Folder 2",
        type:"folder",
        innerContent:[
            {
                id:10,
                name:"File 1 of Folder 2",
                type:"file",
            },
            {
                id:11,
                name:"File 2 of Folder 2",
                type:"file",
            },
            {
                id:12,
                name:"File 3 of Folder 2",
                type:"file",
            },
            {
                id:13,
                name:"Inner Folder 12",
                type:"folder",
                innerContent: [
                    {
                        id:14,
                        name:"Inner Folder File 1",
                        type:"file",
                    },
                    {
                        id:15,
                        name:"Inner Inner Folder",
                        type:"folder",
                        innerContent:[
                            {
                                id:16,
                                name:"Very Inner File ",
                                type:"file",
                            },
                        ]
                    },
                ]
            }
        ]
    }
]