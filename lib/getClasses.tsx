export async function getClasses(category?: any) {
	let requestBody = {};
	try {
		const headers = {
			"content-type": "application/json",
		};
		{
			category
				? (requestBody = {
						query: `
			query Assets($category: ClassCategory) {
				classes(where: {category: $category}) {
				  category
				  description {
					html
				  }
				  title
				  image {
					height
					width
					url
				  }
				  id
				}
			  }
			`,
						variables: { category },
				  })
				: (requestBody = {
						query: `
			query Assets {
				classes {
				  category
				  description {
					html
				  }
				  title
				  image {
					height
					width
					url
				  }
				  id
				}
			  }
			`,
						variables: { category },
				  });
		}

		const options = {
			method: "POST",
			headers,
			body: JSON.stringify(requestBody),
			next: { revalidate: 36000 },
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
