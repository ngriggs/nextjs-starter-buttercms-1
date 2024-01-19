export async function getMenu() {
	try {
		const headers = {
			"content-type": "application/json",
		};
		const requestBody = {
			query: `
      query Assets {
        menus {
          title
          items {
            title
            link
            submenu {
              title
              link
            }
          }
        }
      }
      
			`,
		};
		const options = {
			method: "POST",
			headers,
			body: JSON.stringify(requestBody),
			next: { revalidate: 100 },
		};
		const response = await (
			await fetch(
				`https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/${process.env.HYGRAPH_API}/master`,
				options
			)
		).json();
		return response.data;
	} catch (err) {
		console.log("ERROR DURING FETCH REQUEST", err);
	}
}
