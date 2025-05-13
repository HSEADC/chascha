import Airtable from "airtable"

const token = 'patR01ybcZJtK4It9.e6b1a59c10d4e5b1300484e0ca59e04d2503efaf3162301af982a42fed79ceac'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});
var base = Airtable.base('appgsmWYHeYhUu8Gf');

function getPostTeasers() {
    return new Promise((resolve, reject) => {
        const content = []

        base('teasers')
            .select({ maxRecords: 100 })
            .firstPage()
            .then((result) => {
                result.forEach((record) => {
                    content.push({
                        id: record.id,
                        title: record.fields['Title'],
                        description: record.fields['Description'],
                        description: record.fields['Description'],
                        tags: record.fields['Tags'],
                        images: record.fields['Images'],
                        url: record.fields['URL'],
                    })
                })
                resolve(content)
            })
    })
}

export {getPostTeasers}