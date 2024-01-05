import { setSegment } from "../redux/slicers/segmentSlice";

const WEBHOOK_URL = "https://webhook.site/token/77cb64e8-edca-4f21-8a0b-649ef47dc2e0/requests?sorting=newest";
const POST_WEBHOOK_URL = "https://webhook.site/77cb64e8-edca-4f21-8a0b-649ef47dc2e0"


export const getSegmentData = (setLoading) => async (dispatch) => {
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'api-key': '77cb64e8-edca-4f21-8a0b-649ef47dc2e0'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        dispatch(setSegment(data.data));
        setLoading(false);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
    }
};


export const postSegmentData = (data, setLoading) => async (dispatch) => {
    try {
        const response = await fetch(POST_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData)
        console.log(data)
        setLoading(false);
    } catch (error) {
        console.error("Error fetching data:", error.message);


        setLoading(false);
    }
};
