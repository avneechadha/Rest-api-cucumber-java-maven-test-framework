package stepDefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.DataHelper;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;

public class getWeather {

	public List<HashMap<String, String>> datamap;
	public HttpURLConnection conn;
	public String ResoursePath;
	public URL url;
	public String queryParam1;
	public String queryParam2;

	@Before
	public void setUp() {
		datamap = DataHelper.data(System.getProperty("user.dir") + "../Rest/resources/data.xlsx", "Sheet1");
	}

	@After
	public void tearDown() {
	}

	@Given("^user wants to execute web service to get weather using Open Weather API \\\"([^\\\"]*)\\\"$")
	public void user_wants_to_execute_web_service_to_get_weather_using_Open_Weather_API(String arg1) throws Throwable {
		int index = Integer.parseInt(arg1);
		ResoursePath = datamap.get(index).get("url") + "?q=" + datamap.get(index).get("q1") + "&APPID=" + datamap.get(index).get("q2");
		url = new URL(ResoursePath);
		queryParam1 = datamap.get(index).get("q1");
	}

	@When("^user wants submits the GET request as per the data in Excel Worksheet$")
	public void user_wants_submits_the_GET_request_as_per_the_data_in_Excel_Worksheet() throws Throwable {
		conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Accept", "application/json");
	}

	@Then("^weather retrived successfully$")
	public void weather_retrived_successfully() throws Throwable {
		if (conn.getResponseCode() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
		} else {
			System.out.println("Test case passed: ResponseCode: 200");
		}

		BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

		String output;
		System.out.println("Weather report for city " + queryParam1 + " is as below: .... \n");
		while ((output = br.readLine()) != null) {
			System.out.println(output);
		}

		conn.disconnect();
	}
}
