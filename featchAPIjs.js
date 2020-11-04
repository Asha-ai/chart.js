(
    async () => {
        var apiData = await getApiData();
        const branches = apiData.map(o => o.branch); 
        const revenues2020 = apiData.map(o => o.revenue2020);
        const revenues2019 = apiData.map(o => o.revenue2019);
        const revenues2018 = apiData.map(o => o.revenue2018);

        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: branches,
                datasets: [
                    {
                        backgroundColor: "green",
                        label: "Revenues 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: "red",
                        label: "Revenues last year",
                        data: revenues2019
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenues per branch",
                        data: revenues2020
                    }
                ]
            }
        });

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            return json;
        }
    }
)();

