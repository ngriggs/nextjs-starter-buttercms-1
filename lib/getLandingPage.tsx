export async function getLandingPage(slug) {
	try {
		const headers = {
			"content-type": "application/json",
		};
		const requestBody = {
			query: `
      query Assets {
        landingPage(where: {slug: "${slug}"}) {
          id
          body {
            ... on TwoColumnWithImage {
              id
              buttonLabel
              buttonUrl
              headline
              imagePosition
              scrollAnchorId
              type
              image {
                height
                url
                width
              }
            }
            ... on Testimonial {
              id
              headline
              scrollAnchorId
              type
              testimonialItem {
                name
                title
                quote {
                  html
                }
              }
            }
            ... on Hero {
              id
              buttonLabel
              buttonUrl
              headline
              scrollAnchorId
              type
              image {
                height
                url
                width
              }
            }
            ... on Feature {
              id
              features {
                ... on FeatureItems {
                  id
                  description
                  headline
                  icon {
                    height
                    url
                    width
                  }
                }
              }
              headline
              scrollAnchorId
              type
              subHeadline {
                html
              }
            }
          }
          slug
          title
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
				`https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clqdxx2tyda6001t8e9az3mo6/master`,
				options
			)
		).json();
		// console.log("RESPONSE FROM FETCH REQUEST", response?.data);
		return response.data;
	} catch (err) {
		console.log("ERROR DURING FETCH REQUEST", err);
	}
}
