package org.helianto.starter;

import org.helianto.core.config.HeliantoServiceConfig;
import org.helianto.seed.AbstractRootContextConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@Import({HeliantoServiceConfig.class})
@PropertySource("classpath:/META-INF/app.properties")
public class RootContextConfig extends AbstractRootContextConfig {

}
