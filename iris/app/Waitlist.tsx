const WaitlistButton = () => {
	const innerHtml = `
    <div id="getWaitlistContainer" data-waitlist_id="9041" data-widget_type="WIDGET_1"></div>
    <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
    <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
  `;

	return <div dangerouslySetInnerHTML={{ __html: innerHtml }} />;
};

export default WaitlistButton;

// fetch("https://api.getwaitlist.com/api/v1/waiter", {
//   "headers": {
//     "accept": "application/json",
//     "accept-language": "en-US,en;q=0.9,la;q=0.8,fr;q=0.7",
//     "cache-control": "no-cache",
//     "content-type": "application/json",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site"
//   },
//   "referrer": "http://localhost:3000/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"waitlist_id\":9041,\"referral_link\":\"http://localhost:3000/\",\"widget_type\":\"WIDGET_1\",\"email\":\"annapojawis23@yahoo.com\",\"answers\":[]}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });
