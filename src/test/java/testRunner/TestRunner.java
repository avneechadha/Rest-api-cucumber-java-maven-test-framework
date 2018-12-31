package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @description: This class acts as an interlink between cucumber feature files and step definition classes 
 * @author vinod_rane
 * @version 1.0
 * @since 28/12/2018
 */

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "../Rest/src/main/java/feature/featureFile1.feature",
		glue= {"stepDefination"},
		plugin = {"json:target/cucumber-report.json","pretty","html:target/cucumber","rerun:target/rerun.txt"},
		monochrome=true
		)
public class TestRunner {

}