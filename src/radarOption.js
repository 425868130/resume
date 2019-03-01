const maxVal = 100;
const option = {
    title: {
        text: "技能熟练度"
    },
    tooltip: {},
    legend: {
        data: ["熟练度"]
    },
    radar: {
        //shape: 'circle',
        name: {
            textStyle: {
                color: "#fff",
                backgroundColor: "#515a6e",
                borderRadius: 10,
                padding: [3, 5]
            }
        },
        indicator: [{
                name: "前端",
                max: maxVal
            },
            {
                name: "Linux",
                max: maxVal
            },
            {
                name: "Java后端",
                max: maxVal
            },
            {
                name: "数据库",
                max: maxVal
            },
            {
                name: "Node.js",
                max: maxVal
            }
        ]
    },
    series: [{
        name: "熟练度",
        type: "radar",
        areaStyle: {
            normal: {}
        },
        data: [{
            value: [55, 30, 68, 50, 60],
            name: "xujw"
        }]
    }]
};

export default option;