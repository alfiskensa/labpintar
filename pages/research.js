import {DiscussionEmbed, CommentCount} from "disqus-react"
import MainLayout from "../layouts/main";
import styles from '../styles/Research.module.css'

export default function Research() {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/research`
  const identifier = 'research1'
  const title = 'Factors associated with knowledge of early childhood nutrition and psychosocial stimulation among social media users in Indonesia'
  const disqusConfig = {
    url: canonicalUrl,
    identifier: identifier,
    title: title
  }

  return (
    <div>
      <div>
        <img src="/images/research_background.png" className="d-none d-xs-none d-sm-none d-lg-block" width="100%"/>
        <img src="/images/research_background_sm.png" className="d-block d-lg-none" width="100%"/>        
      </div>
      <div className={styles.section}>
        <div className="container mb-5">
          <h1>
            Factors associated with knowledge of early childhood nutrition and psychosocial stimulation among social media users in Indonesia
          </h1>
          <hr />
          <div className="pb-2" style={{fontWeight: '500', fontSize: '18px'}}>
            <span className="icon icon-user" style={{verticalAlign: 'bottom'}}></span> &nbsp; Davrina Rianda &amp; Devriani Rasitha<br/>
          </div>
          <div className="pb-2" style={{fontWeight: '500', fontSize: '18px'}}>
            <span className="icon icon-clock" style={{verticalAlign: 'bottom'}}></span> &nbsp; 2020<br/>
          </div>
          <div className="pb-2" style={{fontWeight: '500', fontSize: '18px'}}>
            <span className="icon icon-chat" style={{verticalAlign: 'bottom'}}></span>&nbsp; &nbsp; 
            <CommentCount
              shortname='labpintar'
              config={
                {
                  url: canonicalUrl,
                  identifier: identifier,
                  title: title,
                }
              }
            >
              Comment
            </CommentCount>            
          </div>
          <br />
          <p>
            The rise of the digital era hints at the possibility of using social media platforms for early childhood nutrition and stimulation education. However, data on knowledge of associated topics among the users and its related factors were lacking. We aimed to evaluate the associations between sociodemographic characteristics, social media exposure, personal concern, and attitude on knowledge of early childhood nutrition and psychosocial stimulation among social media users.
          </p>
          <p>
          A cross-sectional study was carried out between April 10 until 1 October 2020, among Indonesian Instagram and Twitter users. Data were collected from an online-based questionnaire distributed through a link provided on each social media platform. Questionnaires from the Care for Child Development module, Women’s Nutrition throughout the Life Cycle and in the Context of HIV and AIDS module, and Training Course on Child Growth Assessment were translated to Indonesian and used to quantify the knowledge of early childhood topics. Subjects who obtained above 75% of the total score were classified as excellent knowledge, while those whose scores equal to or less than 75% were categorized as good-to-insufficient. Multiple logistic regression was used to evaluate the associations between factors and the level of knowledge of early childhood nutrition and stimulation.
          </p>
          <p>
          Data from a total of 186 subjects were analyzed in this study. Subjects were mostly female (95.7%) and aged below 25 years old (67.2%). About 16% and 43% of the subjects achieved excellent knowledge of early childhood nutrition and stimulation, respectively. In the bivariable analysis, subjects with equal to or less than 12 years of formal education tended to obtain excellent knowledge of early childhood nutrition. Age below 25 years old, unemployed, not yet married, having concern on own capabilities in nurturing children, and experiencing difficulties in finding easy-to-read child care reading materials were associated with lower odds of having excellent stimulation knowledge. In the multivariable analysis, no association was found between identified factors and nutrition knowledge. However, we observed a few predictors of knowledge of psychosocial stimulation. Social media users under 25 years of age (aOR 0.30, 95%CI 0.12–0.75; p = 0.010) and those experiencing difficulties in finding easy-to-read materials of child care (aOR 0.40, 95%CI 0.20–0.82; p = 0.012) were less likely to achieve excellent knowledge of early childhood psychosocial stimulation. Future larger studies are warranted to confirm these findings for providing a better approach to promotion and education of early childhood care in social media platforms.
          </p>
          <p>
          Selengkapnya:<br/>
            <a href="https://www.tandfonline.com/doi/full/10.1080/2331205X.2020.1848781">https://www.tandfonline.com/doi/full/10.1080/2331205X.2020.1848781</a>
          </p>
        </div>
        <div className="container">
          <DiscussionEmbed
            shortname='Labpintar'
            config={disqusConfig}
          />
        </div>
      </div>
    </div>
  )
}
Research.Layout = MainLayout