import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer tjEZJ31SzMrvabWzDUkJRzsRK6f2-8soaMuYp5LM8WGpEKV79tdmVI_IJVd_hVX3KKKwFvKEueKQpb5gtcdKQEThSjJbcGseApC_z8vaeO_0kZdq-ZErdfx1J5fzYnYx'
    }
});