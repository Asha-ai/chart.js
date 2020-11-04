(
    () => {
        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Tplan1","Tplan2","Tplan3","Tplan4","Tplan5"],
                datasets: [
                    {
                        backgroundColor: "red",
                        label: "Revenues last year",
                        data: [64532, 77543, 33422, 24532, 64323]
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenues per branch",
                        data: [43223, 64332, 53322, 67743, 51132]
                    },
					{
                        backgroundColor: "green",
                        label: "Revenues 2018",
                        data: [63223, 44332, 33322, 27743, 61132]
                    },
                ]
            }
        });
    }
)();

