"use client"

import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { MobilePolicyViewer } from "@/components/mobile-policy-viewer"

const policies = [
  {
    id: "0",
    title: "Anti Porn",
    content: `
ANTI-PORN LAW 
Bondyt Anti-Porn Regulation and Enforcement Policy
Effective Date: 1st January, 2025
 Last Updated: 1st January, 2025
 Version: 1.0

I. Preamble
Bondyt is committed to fostering a safe, respectful, and welcoming community for all users. In order to maintain a space free from content that may undermine these values, Bondyt hereby establishes this Anti-Porn Regulation (“Policy”). This Policy is designed to prohibit pornographic content that is inconsistent with the platform’s community standards while providing clear guidelines for compliance, moderation, and enforcement.

II. Purpose and Scope
Purpose:
 The purpose of this Policy is to:


Define what constitutes pornographic content on Bondyt.
Establish clear standards and responsibilities regarding acceptable content.
Protect users from exposure to explicit material that does not align with Bondyt’s community ethos.
Outline enforcement procedures and remedies for violations.
Scope:
 This Policy applies to all content (including text, images, videos, links, and other media) posted, shared, or transmitted by users via the Bondyt platform, including any third-party integrations and in-app communications.



III. Definitions
Pornographic Content:
 Any visual, audio, or textual material that:


Explicitly depicts or describes sexual acts or genitals with the primary intent of arousing sexual desire.
Goes beyond the bounds of artistic or educational expression to emphasize explicit sexual stimulation.
Is presented in a manner that is gratuitous, overly explicit, or solely intended to provoke arousal.
Sexually Explicit Material:
 Material that may include nudity, sexual acts, or suggestive imagery but is not inherently pornographic if its presentation serves educational, artistic, or expressive purposes. Bondyt reserves the right to assess context on a case-by-case basis.


User:
 Any individual or entity that creates an account or accesses Bondyt’s services and is subject to this Policy.


Content Moderator:
 A designated Bondyt representative or algorithmic system responsible for monitoring, reviewing, and acting upon reported or flagged content.


IV. Prohibited Content and Activities
General Prohibition:
 Users are strictly prohibited from posting, sharing, or facilitating any content that falls within the definition of pornographic content as set forth in Section III.


Specific Prohibitions Include, but Are Not Limited To:


Pornographic images, videos, or live-streams explicitly depicting sexual acts or genitals for the purpose of arousal.
Descriptive or narrative content that graphically details sexual activities in a manner intended primarily for stimulation.
Content that attempts to circumvent the Policy through coded language, symbolism, or indirect representation.
Contextual Exceptions:


Content with educational, artistic, or critical commentary purposes may be reviewed on a case-by-case basis.
Content that contains nudity but is not primarily pornographic (e.g., profile pictures, artistic images) will be subject to moderation discretion and must adhere to community guidelines.
User-Generated Content (UGC):
 All UGC is subject to this Policy, and users are responsible for ensuring that any content they submit complies with these standards.



V. User Responsibilities
Compliance:
 All users must ensure that their conduct and content submissions adhere to this Policy. By using Bondyt’s services, users agree to refrain from uploading or disseminating any prohibited content.


Reporting Violations:
 Users are encouraged to report any content they believe violates this Policy. Bondyt provides reporting tools accessible via the app’s interface.


Accountability:
 Users are responsible for all content submitted under their account and must cooperate with any inquiries or investigations regarding potential violations of this Policy.



VI. Enforcement Mechanisms
Automated Monitoring:
 Bondyt employs automated systems and algorithms to detect potentially pornographic content. While these systems are continually improved, they do not replace human review.


Manual Review and Moderation:
 Content flagged either automatically or by users will be subject to prompt review by Bondyt’s moderation team. This review may result in:


Warnings: For minor or first-time violations.
Temporary Suspension: For repeated or severe breaches.
Permanent Ban: In cases of egregious or habitual violations.
Content Removal:
 Bondyt reserves the right to remove any content that violates this Policy without prior notice. Removed content may be logged and used to inform future enforcement decisions.


Record-Keeping:
 All incidents, decisions, and user communications related to enforcement of this Policy will be documented in accordance with Bondyt’s data retention policies.



VII. Appeals Process
Right to Appeal:
 Users who believe that their content has been mistakenly removed or that their account has been wrongly penalized may submit an appeal through the designated appeals process.


Process:


Submission: Appeals must be submitted via Bondyt’s official support channels, including the required details and any supporting evidence.
Review: An independent panel or designated moderator will review the appeal. Decisions made by this panel are final.
Timeline: Bondyt aims to resolve appeals within 2-7 business days].

VIII. Amendments and Updates
Policy Revisions:
 Bondyt reserves the right to modify, update, or amend this Policy at any time. Users will be notified of material changes through in-app announcements and/or email notifications.


Effective Amendments:
 Any changes to this Policy shall become effective immediately upon posting unless otherwise specified.



IX. Compliance with Applicable Laws
Local and International Regulations:
 While this Policy is intended to regulate user behavior on Bondyt, it does not supersede any applicable local, national, or international laws regarding explicit content. Users are responsible for ensuring their compliance with all relevant legal standards in their jurisdiction.


Legal Cooperation:
 Bondyt may, in its sole discretion, cooperate with law enforcement or regulatory agencies if required by law or if a violation of this Policy also constitutes a violation of applicable law.



X. Severability and Interpretation
Severability:
 Should any provision of this Policy be found invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.


Interpretation:
 Any ambiguities in this Policy shall be interpreted in a manner that furthers Bondyt’s commitment to user safety and the maintenance of a respectful community environment.



XI. Acknowledgment
By using Bondyt, users acknowledge that they have read, understood, and agree to be bound by the terms of this Anti-Porn Regulation and Enforcement Policy.
`,
  },
  {
    id: "1",
    title: "Anti‐Trafficking",
    content: `ANTI-TRAFFICKING LAW

Anti‐Trafficking Act
Effective Date: 1st January, 2025
 Last Updated: 1st January, 2025
 Version: 1.0

I. Preamble
Whereas human trafficking is a grave violation of human rights and dignity, and constitutes a serious crime affecting individuals, communities, and society at large; and
 Whereas the exploitation of persons through trafficking undermines the rule of law and the foundations of a just society; and
 Whereas it is the duty of the State to prevent, prosecute, and punish acts of trafficking in persons while providing robust protection and support to the victims;
Be it enacted by [Legislative Body/Authority] as follows:

II. Title and Commencement
Short Title:
 This Act may be cited as the “Anti‐Trafficking Act.”


Commencement:
 This Act shall come into force on the date of its publication in the Official Gazette or as otherwise specified by the appropriate authority.



III. Definitions
For the purposes of this Act, the following definitions shall apply:
Human Trafficking:
 Any act involving the recruitment, transportation, transfer, harboring, or receipt of persons, by means of threat, use of force, coercion, abduction, fraud, deception, abuse of power, or by other means, for the purpose of exploitation. Exploitation may include, but is not limited to, sexual exploitation, forced labor, slavery, or the removal of organs.


Trafficker:
 Any person, group, or entity that knowingly engages in, facilitates, or profits from human trafficking activities.


Victim:
 Any person who is subjected to human trafficking, including any individual who has been recruited, transported, or exploited under circumstances that fall within the definition of human trafficking.


Exploitation:
 Acts that include sexual exploitation, forced labor, servitude, or any form of abuse where a person’s freedom and dignity are compromised for commercial or personal gain.


Consent:
 In the context of this Act, any consent given under conditions of force, fraud, coercion, or duress shall be deemed invalid.


Related Offenses:
 Any ancillary crimes committed in connection with trafficking, including money laundering, corruption, and abuse of power.



IV. Offenses
Human Trafficking Offense:
 a. Any person who recruits, transports, transfers, harbors, or receives another person, or aids in any of these actions, for the purpose of exploitation, shall be guilty of human trafficking.
 b. Engagement in any form of exploitation as defined in Section III(1) is hereby criminalized.


Facilitation and Complicity:
 a. Any person who knowingly facilitates, finances, or otherwise supports trafficking activities is considered an accomplice and shall be subject to the penalties herein provided.
 b. Corporate entities, if found complicit in trafficking operations, shall be subject to both criminal and civil sanctions.


Aggravating Circumstances:
 Enhanced penalties shall apply when trafficking involves:


Minors or persons with disabilities.
Organized crime networks.
Cross-border operations.
Instances involving severe physical or psychological harm.

V. Penalties
Primary Penalties:
 Any person found guilty of human trafficking or related facilitation may be sentenced to:


A minimum term of imprisonment of [X] years, with the possibility of a maximum term of [Y] years, depending on the severity and circumstances of the offense.
Fines up to [specified amount] or an amount proportionate to the profits derived from the trafficking activities.
Enhanced Penalties:
 In cases involving aggravating circumstances (e.g., trafficking of minors, use of organized crime structures), penalties shall be substantially increased, including:


Mandatory minimum sentences.
Seizure and forfeiture of assets used in, or derived from, trafficking.
Corporate Liability:
 Any corporation or organization found complicit in trafficking activities shall be subject to fines, dissolution, or other civil penalties as determined by the court.



VI. Investigation, Prosecution, and Enforcement
Specialized Enforcement Unit:
 A dedicated Anti‐Trafficking Task Force shall be established under the auspices of [appropriate law enforcement authority] to:


Investigate suspected cases of trafficking.
Coordinate with international agencies for cross-border cases.
Provide training and resources to officers and prosecutors on trafficking issues.
Evidence and Search Procedures:
 Law enforcement agencies are empowered to:


Conduct investigations, including undercover operations.
Execute searches and seizures pursuant to a warrant issued on reasonable grounds.
Utilize forensic and digital investigative techniques to collect evidence.
Prosecution Guidelines:
 The Office of the Prosecutor shall:


Prioritize the investigation and prosecution of trafficking cases.
Ensure fair and expedited trials while safeguarding the rights of the accused.
Work in coordination with victim support services to protect witness identities and rights.

VII. Victim Protection and Support
Immediate Protection Measures:
 Victims of trafficking shall be provided with:


Safe haven provisions, including temporary shelter and protection orders.
Immediate access to medical, psychological, and legal assistance.
Confidentiality regarding their identity and personal information.
Restitution and Rehabilitation:
 a. Trafficking victims shall be entitled to restitution from convicted traffickers for the harm suffered.
 b. State-supported rehabilitation programs, including vocational training and counseling services, shall be established to facilitate the reintegration of victims into society.


Witness Protection:
 Special measures shall be in place to protect trafficking victims who cooperate with law enforcement, including secure relocation and anonymity during judicial proceedings.



VIII. Prevention and Public Awareness
Educational Programs:
 The State shall launch public awareness campaigns and educational programs aimed at:


Informing the public about the risks and signs of trafficking.
Preventing victimization through community outreach initiatives.
Encouraging reporting of suspected trafficking activities.
Interagency Coordination:
 Relevant government agencies, non-governmental organizations, and international bodies shall collaborate on:


Data sharing and best practices in combating trafficking.
Joint training programs and coordinated prevention efforts.

IX. International Cooperation
Cross-Border Collaboration:
 The State shall actively cooperate with other nations and international organizations in:


Extradition and mutual legal assistance for trafficking cases.
Sharing intelligence and best practices.
Participating in international treaties and conventions aimed at eradicating human trafficking.
Compliance with International Law:
 This Act shall be interpreted and implemented in a manner consistent with relevant international instruments, including [list applicable treaties or conventions, e.g., the United Nations Protocol to Prevent, Suppress and Punish Trafficking in Persons].



X. Miscellaneous Provisions
Asset Forfeiture:
 All property, assets, or proceeds acquired through trafficking or related criminal activities shall be subject to seizure and forfeiture by the State.


Reporting and Review:
 a. The Anti‐Trafficking Task Force shall submit an annual report detailing enforcement actions, convictions, and rehabilitation outcomes.
 b. A periodic review of this Act shall be conducted to assess its effectiveness and recommend amendments as necessary.


Severability:
 If any provision of this Act is declared invalid or unenforceable by a competent court, the remaining provisions shall remain in full force and effect.


Transitional Measures:
 Provisions in this Act shall apply to trafficking-related activities committed prior to its commencement, subject to judicial discretion and applicable procedural safeguards.



XI. Final Provisions
Entry into Force:
 This Act shall come into force on the date specified above and shall be binding on all persons and entities within the jurisdiction of [Country/State].


Repeals:
 Any prior legislation inconsistent with the provisions of this Act is hereby repealed to the extent of the inconsistency.
`,
  },
  {
    id: "2",
    title: "Privacy Policy",
    content: `PRIVACY POLICY
    
Bondyt Privacy Policy
Effective Date: 1st January, 2025
 Last Updated: 1st January, 2025

1. Introduction
Welcome to Bondyt. Your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you access or use our mobile application (the “App”) and related services (collectively, “Services”). By using Bondyt, you consent to the practices described in this Privacy Policy.

2. Information We Collect
2.1. Personal Information You Provide
When you create an account or update your profile, we may collect:
Account Information: Your name, email address, password, date of birth, gender, and contact information.
Profile Information: Photos, personal descriptions, interests, relationship preferences, and other content you choose to share.
Communication Information: Data from messages, emails, and any other communications with other users or our support team.
2.2. Information Collected Automatically
When you use Bondyt, our systems may automatically collect:
Usage Data: Information about how you use the App, including pages viewed, features used, and interaction data.
Device Information: Data about the device you use to access our Services (e.g., device type, operating system, unique device identifiers, and mobile network information).
Location Data: With your consent, we may collect precise or general location data to provide location-based features.
2.3. Third-Party Information
We may receive information about you from third parties such as:
Social Media Platforms: If you choose to connect your Bondyt account to social media accounts, we may receive information from those platforms.
Analytics and Advertising Partners: Third-party service providers that assist in analytics, advertising, or marketing efforts.

3. How We Use Your Information
We use the collected information for various purposes, including to:
Provide and Improve Services: Enable user registration, manage your account, personalize your experience, and improve our Services.
Facilitate Communication: Send you notifications, updates, and promotional materials (where permitted) related to your account or our Services.
Enhance Safety and Security: Monitor and protect the integrity of our Services, investigate suspicious activity, and enforce our Terms of Use.
Personalize Content and Advertising: Offer tailored content and advertisements based on your interests and usage patterns.
Legal Obligations: Comply with legal requirements, resolve disputes, and enforce our agreements.

4. How We Share Your Information
4.1. With Service Providers
We may share your information with trusted third-party service providers who perform functions on our behalf, such as payment processing, analytics, data storage, customer support, and marketing. These service providers are contractually obligated to safeguard your information.
4.2. With Other Users
Your profile information, photos, and certain data you provide may be visible to other Bondyt users as part of the dating and matching functionality of the App. You have control over what information is publicly visible via your privacy settings.
4.3. For Legal and Safety Reasons
We may disclose your information:
To comply with a legal obligation, court order, or governmental request.
To protect the rights, property, or safety of Bondyt, our users, or the public.
To prevent or investigate possible fraud or illegal activities.
4.4. In Business Transfers
In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you by email and/or a prominent notice on our App of any change in ownership or the use of your personal data.

5. Data Security
We implement administrative, technical, and physical measures designed to protect your personal information against accidental loss, unauthorized access, disclosure, alteration, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your data.

6. Data Retention
We will retain your personal information for as long as your account is active or as needed to provide you with our Services, comply with our legal obligations, resolve disputes, and enforce our agreements. When data is no longer necessary, we will take reasonable steps to delete or anonymize it.

7. Your Rights and Choices
Depending on your location, you may have the following rights regarding your personal data:
Access: Request access to the personal information we hold about you.
Correction: Request correction of inaccurate or incomplete data.
Deletion: Request the deletion of your personal data under certain conditions.
Restriction: Request restriction of processing under certain circumstances.
Objection: Object to the processing of your data for direct marketing or other purposes.
Data Portability: Request a copy of your data in a structured, commonly used, and machine-readable format.
To exercise your rights or for any inquiries regarding your personal data, please contact us using the details provided in Section 10.

8. Cookies and Similar Technologies
Bondyt uses cookies and similar tracking technologies to enhance your user experience, analyze usage trends, and deliver personalized content and advertisements. You can manage your cookie preferences through your device or browser settings. For more details on our use of cookies, please refer to our [Cookie Policy].

9. International Data Transfers
Your personal information may be transferred to, stored, and processed in countries other than your country of residence. We take appropriate steps to ensure that such data transfers comply with applicable data protection laws and that your information remains secure.

10. Contact Us
If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
Email: support@bondyt.com



11. Updates to This Privacy Policy
Bondyt reserves the right to modify or update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our App and updating the “Last Updated” date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
`,
  },
  {
    id: "3",
    title: "Terms and conditions",
    content: `TERMS AND CONDITIONS


Bondyt Terms and Conditions of Use
Welcome to Bondyt’s Terms and Conditions of Use (these “Terms”). This is a contract between you and Bondyt Technologies (as defined further below) and we want you to know yours and our rights before you use the Bondyt website or application (“Bondyt” or the “App”). Please take a few moments to read these Terms before enjoying the App, because once you access, view or use the App, you are going to be legally bound by these Terms (so probably best to read them first!). Please also read our Community Guidelines (which form part of these Terms) and our Privacy Policy.
Please be aware that if you subscribe to services for a term (the “Initial Term”), then the terms of your subscription will be automatically renewed for additional periods of the same duration as the Initial Term at Bondyt’s then-current fee for such services, unless you cancel your subscription in accordance with Section 5 below.
You should also note that Section 13 of these Terms contains provisions governing how claims that you and Bondyt Technologies have against each other are resolved. In particular, it contains an arbitration agreement that will, with limited exceptions, require disputes between us to be submitted to binding and final arbitration. You have a right to opt out of the arbitration agreement pursuant to Section 13 below. If you do not opt out of the arbitration agreement in accordance with Section 13, (1) you will only be permitted to pursue claims and seek relief against us on an individual basis only; and (2) you are waiving your right to seek relief in a court of law and to have a jury trial on your claims.
And a notice to California subscribers: You may cancel your subscription and request a refund at any time prior to midnight of the third business day following the date you subscribed. If you subscribed using your Apple ID, refunds are handled by Apple, not Bondyt. If you wish to request a refund, please visit Apple Support. If you subscribed using your Google Play Store account or through Bondyt, please contact customer support.
1. Bondyt RULES
Before you can use the App, you will need to register for an account (“Account”). In order to create an Account you must:
be at least 18 years old or the age of majority to legally enter into a contract under the laws of your home country if that happens to be greater than 18; and
be legally permitted to use the App by the laws of your home country.
Please note that we monitor for underage use and we will terminate, suspend or ask you to verify your Account if we have reason to believe that you may be underage.
You can create an Account via manual registration, or by using your Facebook login details. If you create an Account using your Facebook login details, you authorise us to access, display and use certain information from your Facebook account (e.g. profile pictures, relationship status, location and information about Facebook friends). For more information about what information we use and how we use it, please check out our Privacy Policy.
Unfortunately, we cannot allow you to use another person’s Account or to share your Account with any other person without permission.
You’ll have great fun on Bondyt, but if you feel the need to leave, you can delete your Account at any time by going to the ‘Settings’ page when you are logged in and clicking on the ‘Delete account’ link. Your Account will be deleted immediately but it may take a little while for Your Content (defined below) to be completely removed from the App. Your profile information will be treated in accordance with our Privacy Policy. If you delete your Account and try to create a new account within this time period using the same credentials, we will re-activate your Account for you.
We use a combination of automated systems, user reports and a team of moderators to monitor and review accounts and content to identify breaches of these Terms. We reserve the right at our sole discretion to terminate or suspend any Account, restrict access to the App, or make use of any operational, technological, legal or other means available to enforce the Terms (including without limitation blocking specific IP addresses). For users residing in the European Union (“EU”), we will notify you when we take action against your Account or Your Content (defined below) unless it is not appropriate for us to do so (for example, we are not permitted by law enforcement agencies). For all other users, we may take such action, at any time without liability and without the need to give you prior notice. Without limiting the foregoing in any way and unless otherwise prohibited by mandatory laws in the country in which you reside, we expressly reserve the right to terminate or suspend your Account without notice (1) for violating these Terms, (2) due to your conduct on the App, or your conduct with other users of the App (including your “offline” conduct), if we, in our sole discretion, determine your conduct was inappropriate or improper, (3) if we or our affiliates, in our or their sole discretion, determine your conduct on other apps operated by our affiliates was inappropriate or improper, or (4) for any reasons whatsoever that we deem, in our sole discretion, justifies termination. If your Account is terminated or suspended, you agree you will not receive a refund for any paid service or features you have already been charged for. If you believe that we’ve made a mistake in taking action on your Account or Your Content (defined below), you have the option to appeal our decision within a six-month period. If you wish to appeal a decision, please start by taking a moment to read the relevant section of our Community Guidelines. If you still think there has been a mistake in the action taken on your account or content, the best way to appeal is to fill out the appeals form linked in the notification shown to you within the app at the time. Alternatively, you can contact us (please explain why you are appealing our decision, and give as much detail as you can).
For users residing in the EU, you have additional rights under the Digital Services Act to: (i) access third party out-of-court dispute settlement processes; (ii) seek remedies from the courts in the EU member state in which you live; and (iii) lodge a complaint with your local EU regulatory authority. For users residing in the UK, you have a right under local law to bring a claim for breach of contract if you believe we have breached these Terms by removing, restricting or limiting access to, or distribution of, your Content, or suspending or terminating your account.
You may not access, tamper with, or use non-public areas of the App or our systems. Certain portions of the App may not be accessible if you have not registered for an Account.
2. TYPES OF CONTENT
There are three types of content that you will be able to access on the App:
content that you upload and provide (“Your Content”);
content that members provide (“Member Content”); and
content that Bondyt Technologies provides (including, without limitation, database(s) and/or software) (“Our Content”).
There is certain content we can’t allow on Bondyt
Our Community Guidelines form part of these Terms and outline what content and conduct is accepted on and off our App. You agree to comply with our Community Guidelines as may be updated from time to time.
We want our users to be able express themselves as much as possible on Bondyt, but we have to impose restrictions on certain content which:
is illegal or encourages, promotes or incites any illegal activity;
is harmful to minors;
is defamatory or libellous;
itself, or the posting of which, infringes any third party’s rights (including, without limitation, intellectual property rights and privacy rights);
shows another person which was created or distributed without that person’s consent;
contains language or imagery which could be deemed offensive or is likely to harass, upset, embarrass, alarm or annoy any other person;
is obscene, pornographic, violent or otherwise may offend human dignity;
is abusive, insulting or threatening, discriminatory or which promotes or encourages racism, sexism, hatred or bigotry;
relates to commercial activities (including, without limitation, sales, competitions and advertising, links to other websites or premium line telephone numbers);
involves the transmission of “junk” mail or “spam”;
impersonates or intends to deceive or manipulate a person (including, without limitation, scams and inauthentic behaviour);
contains any spyware, adware, viruses, corrupt files, worm programs or other malicious code designed to interrupt, damage or limit the functionality of or disrupt any software, hardware, telecommunications, networks, servers or other equipment, Trojan horse or any other material designed to damage, interfere with, wrongly intercept or expropriate any data or personal information whether from Bondyt or otherwise; or
in any other way violates our Community Guidelines.
Your Content
You agree that Your Content must comply with our Community Guidelines as updated from time to time. As Your Content is unique, you are responsible and liable for Your Content. You will indemnify, defend, release, and hold us harmless from any claims made in connection with Your Content. Sorry that was a bit of a mouthful, but you are what you post!
You may not display any personal contact or banking information on your individual profile page whether in relation to you or any other person (for example, names, home addresses or postcodes, telephone numbers, email addresses, URLs, credit/debit card or other banking details). If you do choose to reveal any personal information about yourself to other users, whether via email or otherwise, it is at your own risk. We encourage you to use the same caution in disclosing details about yourself to third parties online as you would under any other circumstances.
As Bondyt is a public community, Your Content will be visible to other users of the App all around the world - so make sure you are comfortable sharing Your Content before you post. As such, you agree that Your Content may be viewed by other users and any person visiting, participating in or who is sent a link to the App (e.g. individuals who receive a link to a user’s profile or shared content from other Bondyt Users). By uploading Your Content on Bondyt, you represent and warrant to us that you have all necessary rights and licences to do so, and automatically grant us a non-exclusive, royalty free, perpetual, worldwide licence to use Your Content in any way (including, without limitation, editing, copying, modifying, adapting, translating, reformatting, creating derivative works from, incorporating into other works, advertising, distributing and otherwise making available to the general public such Content, whether in whole or in part and in any format or medium currently known or developed in the future).
We may assign and/or sub-license the above licence to our affiliates and successors without any further approval by you.
We do not have any obligation to store Your Content - if it’s important, you should make a copy.
So that we can prevent the unconsented use of Your Content by other members or third parties outside of Bondyt, you authorise us to act on your behalf with respect to such infringing and/or unauthorised uses. This expressly includes the authority, but not the obligation, for us to send takedown notices (including, without limitation, pursuant to 17 U.S.C. § 512(c)(3) (i.e., DMCA Takedown Notices)) on your behalf if Your Content is taken and used by third parties outside of Bondyt.
Member Content
Other members of Bondyt will also share content via the App. Member Content belongs to the user who posted the content and is stored on our servers and displayed via the App at the direction of the user providing the Member Content.
You do not have any rights in relation to other users’ Member Content, and you may only use other Bondyt users’ personal information to the extent that your use of it matches Bondyt’s purpose of allowing people to meet one another. You may not use other users’ information for commercial purposes, to spam, to harass, stalk or to make unlawful threats. We reserve the right to terminate your Account if you misuse other users’ information.
Member Content is subject to the terms and conditions of Sections 512(c) and/or 512(d) of the Digital Millennium Copyright Act 1998. If you have a complaint about Member Content, please see the Digital Millennium Copyright Act section below for more information.
Our Content
You may be wondering what happens to the rest of the Content on Bondyt. Well, it belongs to us! Any other text, content, graphics, user interfaces, trademarks, logos, sounds, artwork, and other intellectual property appearing on Bondyt, as well as the Bondyt software and database(s), are owned, controlled or licensed by us and are protected by copyright, trademark, data, database rights and/or other intellectual property law rights. All right, title and interest in and to Our Content remains with us at all times.
We grant you a non-exclusive, limited, personal, non-transferable, revocable, licence to access and use Our Content, without the right to sublicense, under the following conditions:
you shall not use, sell, modify, or distribute Our Content except as permitted by the functionality of the App;
you shall not use our name in metatags, keywords and/or hidden text;
you shall not create derivative works from Our Content or scrape, disable, decompile, analyse or in any way commercially exploit Our Content, in whole or in part, in any way; and
you shall use Our Content for lawful purposes only.
We reserve all other rights.
No Obligation to Pre-Screen Content.
While we don’t assume any obligation to pre-screen any of Your Content or any Member Content, there may be times where we need to step in to help keep our members safe, and we reserve the right to review, pre-screen, refuse and/or remove any Member Content and Your Content, including content exchanged between users in direct messages as set out in these Terms.
Use of Recommender Systems.
We have developed matching algorithms to predict your compatibility with other users and so we can show you people we think are a good match for you. You can learn more about our use of recommender systems and the main parameters we use in our Privacy Policy.
3. RESTRICTIONS ON THE APP
You agree to:
comply with all applicable laws, including without limitation, privacy laws, intellectual property laws, anti-spam laws, equal opportunity laws and regulatory requirements;
use your real name and real age in creating your Bondyt account and on your profile; and
use the services in a safe, inclusive and respectful manner and adhere to our Community Guidelines at all times.
You agree that you will not:
act in an unlawful or disrespectful manner including being dishonest, abusive or discriminatory;
misrepresent your identity, your age, your current or previous positions, qualifications or affiliations with a person or entity;
disclose information that you do not have the consent to disclose;
stalk or harass any other user of the App;
use the App in any deceptive, inauthentic or manipulative way, including engaging in conduct or distributing content relating to scams, spam, inauthentic profiles or commercial and promotional activity;
submit appeals, reports, notices or complaints that are manifestly unfounded; or;
develop, support or use software, devices, scripts, robots, other types of mobile code or any other means or processes (including crawlers, browser plugins and add-on or other technology) to scrape or otherwise exfiltrate from Bondyt or its services, or otherwise copy profiles and other data from the services.
We don’t like users misbehaving in the Bondyt community. You can report any abuse or complain about Member Content by contacting us, outlining the abuse and/or complaint. You can also report a user directly from a profile or in chat by clicking the ‘Block & Report’ link. We reserve the right to investigate any possible violations of these Terms, any Bondyt user’s rights, or any third party rights and we may, in our sole discretion, immediately terminate any user’s right to use of the App without prior notice, as set out further in Section 1 above, and/or remove any improper, infringing or otherwise unauthorised Member Content submitted to the App.
We don’t control any of the things our users say or do, so you are solely responsible for your interactions with other users of the App.
IN CERTAIN CIRCUMSTANCES, SUCH AS IN RESPONSE TO MEMBER-GENERATED OR PRESS REPORTS OF SUSPECTED MISCONDUCT, Bondyt Technologies MAY INVESTIGATE WHETHER A MEMBER HAS A CRIMINAL HISTORY, WHICH MAY, DEPENDING ON THE CIRCUMSTANCES, INCLUDE SEARCHING SEX OFFENDER REGISTRIES OR OTHER PUBLIC RECORDS. IF SUCH INVESTIGATIONS IDENTIFY A PERSON WITH A CRIMINAL CONVICTION, Bondyt Technologies MAY USE AVAILABLE INFORMATION TO DETERMINE WHETHER THE PERSON IDENTIFIED BY THE INVESTIGATION IS THE SAME PERSON AS THE MEMBER ABOUT WHOM THE INVESTIGATION WAS CONDUCTED. FOLLOWING ANY SUCH INVESTIGATION, WITH RESPECT TO ANY MEMBER THAT Bondyt Technologies REASONABLY BELIEVES TO HAVE BEEN CONVICTED OF A SEX OFFENCE (SUCH AS SEXUAL ASSAULT OR SEXUAL HARASSMENT, AND INCLUDING ANY REGISTERED SEX OFFENDERS), OR A CONVICTION FOR HUMAN TRAFFICKING, STALKING, KIDNAPPING, CHILD ABUSE, DOMESTIC ABUSE, MURDER, HATE CRIMES, OR TERRORISM OR VIOLENT EXTREMISM, Bondyt Technologies MAY TAKE STEPS TO BLOCK THAT PERSON FROM USING THE SERVICE AND COMMUNICATING WITH OTHER MEMBERS OVER THE PLATFORM. Bondyt Technologies RESERVES THE RIGHT TO BLOCK MEMBERS FOR OTHER OFFENCES, OR FOR OTHER VIOLATIONS OF THESE TERMS, OR FOR OTHER REASONS IN THEIR SOLE DISCRETION. CRIMINAL BACKGROUND INVESTIGATIONS, WHEN CONDUCTED, ARE NOT TYPICALLY UPDATED BY Bondyt Technologies. ADDITIONALLY, WHILE INVESTIGATIONS FOR CRIMINAL HISTORIES MAY BE CONDUCTED ON SOME MEMBERS, THEY ARE NOT FOOLPROOF AND MOST MEMBERS ARE NOT EXPECTED TO BE SUBJECT TO ANY FORM OF CHECK FOR CRIMINAL HISTORIES. ANY INVESTIGATIONS FOR CRIMINAL HISTORIES MAY GIVE MEMBERS A FALSE SENSE OF SECURITY. THE CHECKS FOR CRIMINAL HISTORIES THAT MAY BE CONDUCTED BY Bondyt Technologies ARE NOT A PERFECT SAFETY SOLUTION. CRIMINALS MAY CIRCUMVENT EVEN THE MOST SOPHISTICATED SEARCH TECHNOLOGY. NOT ALL CRIMINAL RECORDS ARE PUBLIC IN ALL STATES AND NOT ALL DATABASES ARE UP TO DATE. ONLY PUBLICLY AVAILABLE CONVICTIONS ARE INCLUDED IN CHECKS, AND CHECKS DO NOT COVER OTHER TYPES OF CONVICTIONS OR ARRESTS OR ANY CONVICTIONS FROM FOREIGN COUNTRIES.
You agree to, and hereby do, release Bondyt Technologies and its successors from any claims, demands, losses, damages, rights, and actions of any kind, including personal injuries, death and property damage, that either directly or indirectly arises from your interactions with or conduct of other users of the App. If you are a California resident, you hereby waive California Civil Code Section 1542, which states, “A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.” The foregoing release does not apply to any claims, demands, or any losses, damages, rights and actions of any kind, including personal injuries, death or property damage for any unconscionable commercial practice by Bondyt Technologies or for such party’s fraud, deception, false, promise, misrepresentation or concealment, suppression or omission of any material fact in connection with the App.
Scraping or replicating any part of the App without our prior consent is expressly prohibited. This includes by any means (automated or otherwise) other than through our currently available, published interfaces - unless you have been specifically allowed to do so in a separate agreement with us.
4. PRIVACY
For information about how Bondyt Technologies collects, uses, and shares your personal data, please check out our Privacy Policy. By using Bondyt, you acknowledge that we may use such data in accordance with our Privacy Policy.
5. PAYMENT TERMS
Generally.
Bondyt may offer products and services for purchase on the App (“In-App Purchase”). If you choose to make an In-App Purchase, you acknowledge and agree that additional terms, disclosed to you at the point of purchase, may apply, and that such additional terms are incorporated herein by reference.
You may make an In-App Purchase through the following payment methods (“Payment Method”): (a) making a purchase through a third-party platform such as the Apple App Store and Google Play Store (“Third Party Store”), or (b) paying with your credit card, debit card, or PayPal account, which will be processed by a third-party processor. Once you have made an In-App Purchase, you authorise us to charge your chosen Payment Method. If payment is not received by us from your chosen Payment Method, you agree to promptly pay all amounts due upon demand by us.
Subscriptions and Auto-Renewal: Bondyt may offer some services as automatically-renewing subscriptions, e.g., a one-week subscription, one-month subscription, or three-month subscription (“Premium Services”).IF YOU PURCHASE AN AUTOMATICALLY RENEWING SUBSCRIPTION, YOUR SUBSCRIPTION WILL RENEW AT THE END OF THE PERIOD, UNLESS YOU CANCEL, AT Bondyt’S THEN-CURRENT PRICE FOR SUCH SUBSCRIPTIONS.To avoid charges for a new subscription period, you must cancel, as described below, before the end of the then-current subscription period. Deleting your account or deleting the application from your device does not cancel your subscription. You will be given notice of changes in the pricing of the Premium Services to which you have subscribed and an opportunity to cancel. If Bondyt changes these prices and you do not cancel your subscription, you agree that you will be charged at Bondyt’s then-current pricing for subscription.
Cancelling Subscriptions. If you purchased a subscription directly from Bondyt, you may cancel or change your Payment Method via the payment settings option under your profile. If you purchased a subscription through a Third Party Store, such as the Apple App Store or the Google Play Store, you will need to access your account with that Third Party Store and follow instructions to change or cancel your subscription. If you cancel your subscription, you may use your subscription until the end of the period you last paid for, but (i) you will not (except as set forth in the subsection entitled “Refunds” below) be eligible for a prorated refund, (ii) your subscription will not be renewed when that period expires and (iii) you will then no longer be able to use the Premium Services or In-App Purchases enabled by your subscription.
Because our Services may be utilised without a subscription, cancelling your subscription does not remove your profile from our Services. If you wish to fully terminate your account, you must terminate your account as set forth in Section 15.
Bondyt Technologies operates a global business, and our pricing varies by a number of factors. We frequently offer promotional rates - which can vary based on region, length of subscription, bundle size and more. We also regularly test new features and payment options. Bondyt Technologies reserves the right, including without prior notice, to limit the available quantity of or discontinue making available any product, feature, service or other offering; to impose conditions on the honouring of any coupon, discount, offer or other promotion; to bar any user from making any transaction; and to refuse to provide any user with any product, service or other offering or to honour any offer.
Free Trials. If you sign up for a free trial and do not cancel, your trial may convert into a paid subscription and your Payment Method will be charged at the then-current price for such subscription. Once your free trial converts to a paid subscription, your paid subscription will continue to automatically renew at the end of each period, and your Payment Method will be charged, until you cancel. To avoid charges for a new subscription period, you must cancel before the end of the then-current subscription period or free trial period as described above. Deleting your account or deleting the application from your device does not cancel your free trial. If you have signed up for a free trial on Bondyt through the Apple Store or Google Play Store previously, you will not be eligible for another free trial and you will then be automatically signed up to a subscription and charged as described in this paragraph.
Refunds. Generally, all charges for purchases are nonrefundable, and there are no refunds or credits for partially used periods.
However:
For subscribers residing in Arizona, California, Colorado, Connecticut, Illinois, Iowa, Minnesota, New York, North Carolina, Ohio, Rhode Island, and Wisconsin, the terms below apply:
YOU, THE BUYER, MAY CANCEL YOUR SUBSCRIPTION, WITHOUT PENALTY OR OBLIGATION, AT ANY TIME PRIOR TO MIDNIGHT OF THE THIRD BUSINESS DAY FOLLOWING THE DATE YOU SUBSCRIBED (EXCLUDING SUNDAYS AND HOLIDAYS). IN THE EVENT THAT YOU DIE BEFORE THE END OF YOUR SUBSCRIPTION PERIOD, YOUR ESTATE SHALL BE ENTITLED TO A REFUND OF THAT PORTION OF ANY PAYMENT YOU HAD MADE FOR YOUR SUBSCRIPTION WHICH IS ALLOCABLE TO THE PERIOD AFTER YOUR DEATH. IN THE EVENT THAT YOU BECOME DISABLED (SUCH THAT YOU ARE UNABLE TO USE Bondyt) BEFORE THE END OF YOUR SUBSCRIPTION PERIOD, YOU SHALL BE ENTITLED TO A REFUND OF THAT PORTION OF ANY PAYMENT YOU HAD MADE FOR YOUR SUBSCRIPTION WHICH IS ALLOCABLE TO THE PERIOD AFTER YOUR DISABILITY BY PROVIDING THE COMPANY NOTICE IN THE SAME MANNER AS YOU REQUEST A REFUND AS DESCRIBED BELOW.
For subscribers residing anywhere outside the US:
Subscribers who purchase weekly subscriptions are entitled to a refund of the price of the subscription (minus the value of any portion of the subscription used at the date the refund is requested) if requested within the first 6 days after the subscription starts.
Subscribers who purchase monthly or longer subscriptions are entitled to a refund of the price of the subscription (minus the value of any portion of the subscription used at the date the refund is requested) if requested within the first 14 days after the subscription starts.
There are no refunds for subscription renewals. Blocked members are not entitled to refunds.
To request a refund:
To request a refund: In addition to cancelling, eligible subscribers must request a refund to receive one.
If you subscribed through Google and reside outside the US your refund will be handled by Google, not Bondyt. To request a refund, go to the Google Play Store app, select your order history, find the transaction, select “Report a Problem” and submit your refund request.
If you subscribed using your Apple ID, refunds are handled by Apple (regardless of where you live), not Bondyt. To request a refund, go to iTunes, click on your Apple ID, select “Purchase history,” find the transaction and hit “Report Problem”. You can also submit a request at Apple Support.
For all other purchases: please contact customer support with your order number (you can find the order number in the order confirmation email, or if you purchased from the Google Play Store by logging in to Google Wallet). You may also mail or deliver a signed and dated notice which states that you, the buyer, are cancelling this agreement, or words of similar effect. Please also include the email address or mobile number associated with your account along with your order number. This notice shall be sent to: Bondyt, Attn.: Cancellations, P.O. Box 300940, Austin, Texas, 78703.
Taxes.
The payments required under this Section 5 do not include any Sales Tax that may be due in connection with the Premium Services provided under these Terms. If Bondyt determines it has a legal obligation to collect a Sales Tax from you in connection with these Terms, Bondyt will collect such Sales Tax in addition to the payments required under this Section 5. If any Premium Services, or payments for any Premium Services, under these Terms are subject to any Sales Tax in any jurisdiction and you have not remitted the applicable Sales Tax to Bondyt, you will be responsible for the payment of such Sales Tax and any related penalties or interest to the relevant tax authority. As used herein, “Sales Tax” means any sales or use tax and any other tax measured by sales proceeds that is the functional equivalent of a sales tax where the applicable taxing jurisdiction does not otherwise impose a sales or use tax.
6. VIRTUAL ITEMS
At times, you may be able to purchase a limited, personal, non-transferable, non-sublicensable, revocable licence to access special limited-use features from Bondyt, referred to here as “Virtual Items.” You can only purchase Virtual Items through Bondyt or Bondyt’s partners. Virtual Items represent a limited license right governed by this Agreement, and, except as otherwise prohibited by applicable law, no title or ownership in or to Virtual Items is being transferred or assigned to you. This Agreement, and your purchase of Virtual Items, does not constitute the sale of any rights in Virtual Items.
Any Virtual Item balance shown in your account does not constitute a real-world balance or reflect any stored value, but instead shows the extent of your licence to access Virtual Items. Virtual Items do not incur fees for non-use. Your licence in Virtual Items will terminate on the earlier of Bondyt ceasing provision of services or your account closing or terminating. Bondyt may also at times provide Virtual Items as bonuses to, or parts of, paid subscriptions for its services. Your ability to use Virtual Items you have access to in this manner may terminate at the end of each of your subscription periods and your access to Virtual Items may not “roll over” or accumulate through additional subscription periods. Your access to Virtual Items gained through subscriptions may also end if you cancel your subscription.
Bondyt, in its sole discretion, reserves the right to charge fees for the right to access or use Virtual Items and/or may distribute Virtual Items with or without charge. Bondyt may manage, regulate, control, modify, or eliminate Virtual Items at any time, including taking actions that may impact the perceived value or purchase price, if applicable, of any Virtual Items and Bondyt shall have no liability to you for doing so. You shall not sell, redeem, or otherwise transfer Virtual Items to any person or entity. Virtual Items may only be redeemed through our Services.
ALL PURCHASES AND REDEMPTIONS OF VIRTUAL ITEMS MADE THROUGH OUR SERVICES ARE FINAL AND NON-REFUNDABLE. YOU ACKNOWLEDGE THAT Bondyt IS NOT REQUIRED TO PROVIDE A REFUND FOR ANY REASON, AND THAT YOU WILL NOT RECEIVE MONEY OR OTHER COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN AN ACCOUNT IS CLOSED, WHETHER SUCH CLOSURE WAS VOLUNTARY OR INVOLUNTARY.
7. PUSH NOTIFICATIONS; LOCATION-BASED FEATURES
We may provide you with emails, text messages, push notifications, alerts and other messages related to the App and/or the Bondyt services, such as enhancements, offers, products, events, and other promotions. After downloading the App, you will be asked to accept or deny push notifications/alerts. If you deny, you will not receive any push notifications/alerts. If you accept, push notifications/alerts will be automatically sent to you. If you no longer wish to receive push notifications/alerts from the App, you may opt out by changing your notification settings on your mobile device. With respect to other types of messaging or communications, such as emails, text messages, etc., you can unsubscribe or opt out by either following the specific instructions included in such communications, or by emailing us with your request at feedback@team.Bondyt.com.
The App may allow access to or make available opportunities for you to view certain content and receive other products, services and/or other materials based on your location. To make these opportunities available to you, the App will determine your location using one or more reference points, such as GPS, Bluetooth and/or software within your mobile device. If you have set your mobile device to disable GPS, Bluetooth or other location determining software or do not authorise the App to access your location data, you will not be able to access such location-specific content, products, services and materials. For more about how the App uses and retains your information, please read the Privacy Policy.
8. DISCLAIMER
THE APP, SITE, OUR CONTENT, AND MEMBER CONTENT ARE ALL PROVIDED TO YOU “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE DO NOT GUARANTEE THE COMPATIBILITY OF ANY MATCHES.
SHOULD APPLICABLE LAW NOT PERMIT THE FOREGOING EXCLUSION OF EXPRESS OR IMPLIED WARRANTIES, THEN WE GRANT THE MINIMUM EXPRESS OR IMPLIED WARRANTY REQUIRED BY APPLICABLE LAW. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, SHALL CREATE ANY WARRANTY, REPRESENTATION OR GUARANTEE NOT EXPRESSLY STATED IN THIS SECTION.
ADDITIONALLY, WE DO NOT MAKE ANY WARRANTIES THAT THE APP OR SITE WILL BE UNINTERRUPTED, SECURE OR ERROR FREE OR THAT YOUR USE OF THE APP OR SITE WILL MEET YOUR EXPECTATIONS, OR THAT THE APP, SITE, OUR CONTENT, ANY MEMBER CONTENT, OR ANY PORTION THEREOF, IS CORRECT, ACCURATE, OR RELIABLE. YOUR USE OF THE APP OR SITE IS AT YOUR OWN RISK. YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. Bondyt Technologies IS NOT RESPONSIBLE FOR THE CONDUCT OF ANY USER. Bondyt Technologies DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS MEMBERS.
9. LIMITATION OF LIABILITY
NEITHER US NOR ANY OWNER WILL BE LIABLE FOR ANY DAMAGES, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE, INCLUDING, WITHOUT LIMITATION, LOSS OF DATA, INCOME, PROFIT OR GOODWILL, LOSS OF OR DAMAGE TO PROPERTY AND CLAIMS OF THIRD PARTIES ARISING OUT OF YOUR ACCESS TO OR USE OF THE APP, SITE, OUR CONTENT, OR ANY MEMBER CONTENT, HOWEVER CAUSED, WHETHER BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), PROPRIETARY RIGHTS INFRINGEMENT, PRODUCT LIABILITY OR OTHERWISE.
THE FOREGOING SHALL APPLY EVEN IF WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IF YOU BECOME DISSATISFIED IN ANY WAY WITH THE APP OR SITE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO STOP YOUR USE OF THE APP AND SITE.
YOU HEREBY WAIVE ANY AND ALL CLAIMS ARISING OUT OF YOUR USE OF THE APP OR SITE. BECAUSE SOME STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN TYPES OF DAMAGES, THESE PROVISIONS MAY NOT APPLY TO YOU. IF ANY PORTION OF THIS LIMITATION ON LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN OUR AGGREGATE LIABILITY SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
THE LIMITATION OF LIABILITY HEREIN IS A FUNDAMENTAL ELEMENT OF THE BASIS OF THE BARGAIN AND REFLECTS A FAIR ALLOCATION OF RISK. THE APP AND SITE WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS AND YOU AGREE THAT THE LIMITATIONS AND EXCLUSIONS OF LIABILITY, DISCLAIMERS AND EXCLUSIVE REMEDIES SPECIFIED HEREIN WILL SURVIVE EVEN IF FOUND TO HAVE FAILED IN THEIR ESSENTIAL PURPOSE. THE FOREGOING DOES NOT APPLY TO LIABILITY ARISING FROM ANY FRAUD OR FRAUDULENT MISREPRESENTATIONS, OR ANY OTHER LIABILITY THAT CANNOT BE LIMITED BY APPLICABLE LAW.
10. INDEMNITY
All the actions you make and information you post on Bondyt remain your responsibility. Therefore, you agree to indemnify, defend, release, and hold us, and our partners, licensors, affiliates, contractors, officers, directors, employees, representatives and agents, harmless, from and against any third party claims, damages (actual and/or consequential), actions, proceedings, demands, losses, liabilities, costs and expenses (including reasonable legal fees) suffered or reasonably incurred by us arising as a result of, or in connection with:
any negligent acts, omissions or wilful misconduct by you;
your access to and use of the App;
the uploading or submission of Content to the App by you;
any breach of these Terms by you; and/or
your violation of any law or of any rights of any third party.
We retain the exclusive right to settle, compromise and pay any and all claims or causes of action which are brought against us without your prior consent. If we ask, you will co-operate fully and reasonably as required by us in the defence of any relevant claim.
The foregoing provision does not require you to indemnify Bondyt Technologies for any unconscionable commercial practice or any fraud, deception, false promise, misrepresentation or concealment, suppression or omission of any material fact in connection with the App.
11. PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT
If you believe any content on Bondyt infringes the copyright in a work that you own, please submit a notification alleging such infringement (“DMCA Takedown Notice”) to Bondyt Technologies’s Copyright Agent. The Takedown Notice must include the following:
A physical or electronic signature of a person authorised to act on behalf of the owner of an exclusive right that is allegedly infringed;
Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works;
Identification of the material claimed to be infringing or to be the subject of infringing activity and that is to be removed or access disabled and information reasonably sufficient to permit the service provider to locate the material;
Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail;
A statement that you have a good faith belief that use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law; and
A statement that, under penalty of perjury, the information in the notification is accurate and you are authorised to act on behalf of the owner of the exclusive right that is allegedly infringed.
Takedown Notices should be sent to Bondyt Technologies’s Copyright Agent at copyright@team.Bondyt.com. If you wish to reach out to Bondyt Technologies’s Copyright Agent via other methods, you can write to: Bondyt, Attn: Bondyt Technologies’s Copyright Agent, P.O. Box 300940, Austin, Texas, 78703; or phone: +1 - 512-696-1409.
12. THIRD PARTY APP STORE
The following additional terms and conditions apply to you if you download the App from a Third Party Store. To the extent that the other terms and conditions of these Terms are less restrictive than, or otherwise conflict with, the terms and conditions of this Section, the more restrictive or conflicting terms and conditions in this Section will apply, but solely with respect to the App and the Third Party Store. You acknowledge and agree that:
These Terms are concluded solely between you and Bondyt Technologies and not with the providers of the Third Party Store, and Bondyt Technologies (and not the Third Party Store providers) is solely responsible for the App and the content thereof. To the extent that these Terms provide for usage rules for the App which are less restrictive or in conflict with the applicable terms of service of the Third Party Store from which you obtain the App, the more restrictive or conflicting term of the Third Party Store will take precedence and will apply.
The Third Party Store provider has no obligation whatsoever to provide any maintenance and support services with respect to the App. Bondyt Technologies is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. The Third Party Store provider will have no warranty obligation whatsoever with respect to the App, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be the sole responsibility of Bondyt Technologies.
Bondyt Technologies, not the Third Party Store provider, is responsible for addressing any claims you or any third party may have relating to the App or your possession and/or use of the App, including, but not limited to: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; (iii) claims arising under consumer protection or similar legislation; and/or (iv) intellectual property infringement claims.
The Third Party Store provider and its subsidiaries are third party beneficiaries of these Terms, and, upon your acceptance of these Terms, the Third Party Store provider from whom you obtained the App will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third party beneficiary thereof.
In the event of a conflict between a Third Party Store’s or mobile carrier’s applicable terms and conditions and these Terms, the terms and conditions of the Third Party Store or mobile carrier shall govern and control. We are not responsible and have no liability whatsoever for third-party goods or services you obtain through a Third Party Store or mobile carrier. We encourage you to make whatever investigation you feel necessary or appropriate before proceeding with any online transaction with any of these third parties.
13. DISPUTE RESOLUTION
Please read the following arbitration agreement in this Section (“Arbitration Agreement”) carefully. Unless you opt out in the manner described in Section 13(10) below, this Arbitration Agreement requires you and Bondyt Technologies to resolve disputes by binding arbitration instead of in court, and limits the manner in which we may seek relief from each other.
1. When Does This Arbitration Agreement Apply? This Arbitration Agreement applies to any disputes or claims of any kind whatsoever (whether based in contract, tort, statute, regulation, ordinance, fraud, misrepresentation or any other legal or equitable theory) between you and Bondyt Technologies arising out of or relating to the Terms, prior versions of the Terms, your use of our App, or any other aspect of your relationship with Bondyt, including claims or disputes arising (but not actually filed in arbitration) before the effective date of these Terms. It requires that, and by entering into these Terms you and Bondyt Technologies agree, that such disputes or claims will be resolved by binding arbitration, rather than in court, except that (i) you or Bondyt may assert individual claims in small claims court if your claims qualify; and (ii) you or Bondyt may seek equitable relief in court for infringement or misuse of intellectual property rights.
2. Notice of Dispute and Informal Resolution. Before beginning the arbitration process, you and Bondyt Technologies agree to first notify one another of the dispute in writing at least 60 days in advance of initiating an arbitration. Notice to Bondyt Technologies must be sent by letter to our registered agent: CT Corporation, 1209 Orange Street, City of Wilmington, County of New Castle, Delaware 19801, and must provide your name, current email address, mailing address, and telephone number, as well as the name, email address, and telephone number associated with your Bondyt account (if different from your current information); and describe the nature of the claim and the specific relief being sought.
You and Bondyt agree to meet and confer, via teleconference or videoconference, in a good faith effort to informally resolve any claim or dispute covered by this Arbitration Agreement. If either party is represented by counsel, that counsel may participate in the informal dispute resolution conference. During this process, you may be provided with an offer of judgment. A party defending against a claim may serve on an opposing party an offer to allow judgment on specified terms, with the costs then accrued. If the judgment that the offeree finally obtains is not more favourable than the unaccepted offer, the offeree must pay the costs incurred after the offer was made.
All offers, promises, conduct, and statements made in the course of the informal dispute resolution process by any party, its agents, employees, and attorneys are confidential and not admissible for any purpose in any subsequent proceeding, provided that evidence that is otherwise admissible or discoverable shall not be rendered inadmissible or non-discoverable as a result of its use in the informal dispute resolution process.
The informal dispute resolution conference shall occur within 60 days of receipt of the written notice described above, unless an extension is mutually agreed upon. If, after participating in that conference, the parties are unable to resolve the dispute, the claimant may commence an arbitration in accordance with this Agreement. Completion of this informal dispute resolution is a condition precedent to filing any demand for arbitration. Failure to do so is a breach of this Agreement, and no demand for arbitration shall be valid unless such written notice is provided and good faith discussions have been conducted.
Any statute of limitations will be tolled while the parties engage in the informal dispute resolution process described in this section.
3. How Do You Start The Arbitration Process? If you and Bondyt Technologies are unable to resolve the dispute within 60 days, either party may proceed to file a claim for arbitration. To begin the arbitration process, you or Bondyt Technologies must submit notice by certified mail of the claim with an individualised arbitration demand. To be valid, the demand must contain the name of the claiming party (you or Bondyt Technologies), your or Bondyt Technologies’s mailing address, the email address or phone number associated with your Bondyt account (if applicable), and a detailed description of the dispute and the relief sought. Notice to Bondyt Technologies must be submitted to our registered agent: CT Corporation, 1209 Orange Street, City of Wilmington, County of New Castle, Delaware 19801.
4. What Are The Rules Of Arbitration? The Federal Arbitration Act (“FAA”) governs this Arbitration Agreement and applies to the interpretation and enforcement of this Arbitration Agreement. If the FAA is found to not apply to any issue regarding the interpretation or enforcement of this Arbitration Agreement, that that issue shall be determined by Texas law, notwithstanding choice-of-law principles, pursuant to Section 17 of the Terms. The applicable arbitration provider depends on where you live. If you live in California, the arbitration will be administered by ADR Services, Inc. under its most current arbitration rules and procedures, available at https://www.adrservices.com/services-2/arbitration-rules/. If you live outside of California, the arbitration will be administered by National Arbitration and Mediation under its most current Comprehensive Dispute Resolution Rules and Procedures, available at https://www.namadr.com/resources/rules-fees-forms, or under its most current Supplemental Rules for Mass Arbitrations, as applicable, available at https://www.namadr.com/content/uploads/2021/12/SupplementalRules12.22.21.pdf. If the applicable arbitration provider is not available to arbitrate, including because it is not able to administer the arbitration(s) consistent with the rules, procedures, and terms of this Arbitration Agreement, including those described in Section 13(8) (Mass Filings), the parties will select an alternative arbitral forum. If the parties cannot agree on an appropriate alternative arbitration provider, then the parties will ask a court of competent jurisdiction to appoint an arbitrator pursuant to 9 U.S.C. § 5 that is able to administer the arbitration(s) consistent with the rules, procedures, and terms of this Arbitration Agreement. This Arbitration Agreement will govern to the extent it conflicts with the arbitration provider’s rules.
The initiating party must pay all filing fees for the arbitration. Your and Bondyt Technologies’s responsibility to pay other administrative and arbitrator costs will be as set forth in the applicable arbitration provider’s rules, unless the arbitrator determines the claims are frivolous. If a claim is determined to be frivolous, the claimant is responsible for reimbursing the respondent for its portion of all such administrative, hearing, and/or other fees incurred as a result of the frivolous claim.
You may qualify for a waiver of certain arbitration costs under the applicable arbitration provider’s rules or other applicable law. If you meet the standard for proceeding in forma pauperis in federal court, Texas state court, or the courts of your state of residence, cannot obtain a waiver from the arbitration provider of any filing fees you are required to pay, and the arbitration provider refuses to administer the arbitration without your payment of said fees, Bondyt Technologies will pay the filing fees for you.
5. What Can The Arbitrator Decide? The arbitrator has the exclusive authority to resolve any and all threshold arbitrability issues, including whether this Arbitration Agreement is applicable, enforceable, or unconscionable. Courts, however, shall have the exclusive authority to determine (i) whether any provision of this Arbitration Agreement should be severed and the consequences of said severance, (ii) enforceability of any or all of the mass arbitration procedures set forth in Section 13(8), (iii) whether you have complied with conditions precedent to arbitration, and (iv) whether an arbitration provider is available to hear the arbitration(s) under Section 13(4). The arbitrator will have the authority to grant motions dispositive of all or part of any claim. The arbitrator will have the authority to award monetary damages and to grant any non-monetary remedy or relief available in an individual under applicable law, the arbitral forum’s rules, and the Terms (including the Arbitration Agreement). The arbitrator will issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and us.
Pursuant to and in conformance with Section 17 of the Terms, any original action to compel arbitration under Section 4 of the FAA (or analogous state law) must be brought in a State or Federal Court located in Travis County, Texas.
6. No Jury Trials. By agreeing to arbitration, YOU AND Bondyt ARE EACH AGREEING TO WAIVE THEIR RIGHTS TO A JURY TRIAL. Instead, you and Bondyt Technologies are electing that all claims and disputes will be resolved by arbitration under this Arbitration Agreement, except as described in Section 13(1) above. An arbitrator can award the same damages and relief as a court and must follow this Agreement as a court would. However, there is no judge or jury in arbitration, and court review of an arbitration award is subject to very limited review.
7. One At A Time. All claims and disputes within the scope of this Arbitration Agreement MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS, AND YOU AND Bondyt Technologies GIVE UP YOUR RIGHTS TO PARTICIPATE IN A CLASS ACTION OR ANY OTHER CLASS PROCEEDING. However, this shall not preclude the use of bellwether arbitrations, global mediation, or batch arbitrations as described in Section 13(8) below, nor preclude the application of the arbitration provider’s fee schedules for mass arbitrations, as applicable. Only relief that would be permitted in an individual lawsuit is available, and claims of more than one customer or user cannot be arbitrated or consolidated with those of any other customer or user, except as provided in Section 13(8) below, nor shall this preclude application of the arbitration provider’s fee schedules for mass arbitrations, as applicable. The arbitration proceeding will not be consolidated with any other matters or joined with any other cases or parties , except as provided in Section 13(8) below, nor shall this preclude application of the arbitration provider’s fee schedules for mass arbitrations, as applicable.
For mass arbitrations before ADR Services, Inc., you and Bondyt Technologies agree that its mass arbitration fee schedule shall apply, available at https://www.adrservices.com/wp-content/uploads/2022/10/ADR-Mass-Consumer-Non-Employment-Fee-Schedule-Eff-11-5-21.pdf. For mass arbitrations before National Arbitration and Mediation, you and Bondyt Technologies agree that its mass arbitration fee schedule shall apply, available at https://www.namadr.com/content/uploads/2023/07/Consumer-Fees-as-of-7.1.2023-updated-as-of-7.1.2023.pdf. For mass arbitrations before any other arbitration provider, you agree that its mass arbitration fee schedule shall apply. If the arbitrator does not have a fee schedule for mass filings, then the claims must proceed in court.
If a decision is issued stating that applicable law precludes enforcement of any of this subsection’s limitations as to a given claim for relief, then the claim must be severed from the arbitration and brought into the State or Federal Courts located in Travis County, Texas. All other claims shall be arbitrated. This subsection does not prevent you or Bondyt from participating in a class-wide settlement of claims.
8. Mass Filings. If, at any time, 30 or more similar demands for arbitration are asserted against Bondyt or related parties by the same or coordinated counsel or entities, or if Bondyt Technologies asserts 30 or more similar demands for arbitration or counterclaims against similarly-situated parties, within a period of 60 days or otherwise close in proximity (“Mass Filing”), the additional protocols set forth below shall apply:
Acknowledgment of Mass Filing protocols. If you or Bondyt Technologies, or your or our counsel, files a demand for arbitration that fits within the definition of Mass Filing referred to above, then you and we agree that the demand for arbitration shall be subject to the additional protocols set forth in this Mass Filings subsection. If the parties disagree as to whether a series of filings fits within the definition of Mass Filing above, the arbitration provider shall resolve the disagreement. You and we also acknowledge that the adjudication of the dispute may be delayed and that any applicable statute of limitations shall be tolled from the time of filing of the demand for arbitration, and pending resolution of the bellwether proceedings.
Bellwether Arbitrations. Bellwether proceedings are encouraged by courts and arbitration administrators where there are multiple disputes involving similar claims against the same or related parties. The parties shall select ten individual arbitration claims (five per side), designated the “Initial Test Cases,” to proceed to arbitration. Only the Initial Test Cases shall be filed with the arbitrator. All other claims shall be held in abeyance. This means that the filing fees will be paid only for the Initial Test Cases; for all other demands for arbitration in a Mass Filing, the filing fees (together with any arbitrator consideration of the other demands) will be in abeyance, and neither You nor Bondyt will be required to pay any such filing fees. You and Bondyt Technologies also agree that neither you nor we shall be deemed to be in breach of this Arbitration Agreement for failure to pay any such filing fees, and that neither you nor we shall be entitled to any contractual, statutory, or other remedies, damages, or sanctions of any kind for failure to pay any such filing fees. If, pursuant to this subsection, a party files non-Bellwether Arbitrations with the arbitration provider, the parties agree that the arbitration provider shall hold those demands in abeyance and not refer them to the arbitrator pending resolution of the Initial Test Cases. Unless the claims are resolved in advance or the schedule is extended, the arbitrators will render a final award for the Initial Test Cases within 120 days of the initial pre-hearing conference.
Global Mediation. Following the resolution of the Initial Test Cases, the parties agree to engage in a global mediation of all the remaining individual arbitration claims comprising the Mass Filing (“Global Mediation”), deferring any filing costs associated with the non-Initial Test Cases until the Initial Test Cases and subsequent Global Mediation have concluded. After the final awards are provided to the mediator in the Initial Test Cases, the mediator and the parties shall have 90 days to agree upon a substantive methodology and make an offer to resolve the outstanding cases. If the Parties are unable to resolve the outstanding claims during the Global Mediation, the Parties may choose to opt out of the arbitration process and proceed in court with the remaining claims. Notice of the opt-out shall be provided in writing within 60 days of the close of the Global Mediation. Absent notice of an opt-out, the arbitrations may then be filed and administered by the arbitration provider pursuant to this Agreement’s Batch Arbitration provision below and the arbitrator’s fee schedule for mass filings as described in Subsection 13(7) above, unless the parties mutually agree otherwise in writing. You and we also acknowledge that any applicable statute of limitations shall be tolled pending resolution of the global mediation process.
Batch Arbitration. To increase the efficiency of administration and resolution of arbitrations, you and Bondyt Technologies agree that in the event a Mass Filing is not resolved by the Bellwether Arbitration and Global Mediation processes described above, the arbitration provider will (1) administer the remaining arbitration demands in batches of 100 demands per batch; (2) appoint one arbitrator for each batch; and (3) provide for the resolution of each batch as a single consolidated arbitration with one set of filing and administrative fees due per side per batch, one procedural calendar, one hearing (if any) in a place to be determined by the arbitrator, and one final award (“Batch Arbitration”). If the arbitration provider will not administer the Batch Arbitration with one set of filing and administrative fees due per side per batch, then the arbitration provider’s mass arbitration fee schedule shall apply.
Enforcement of Subsection. A Court of competent jurisdiction located in a venue allowed under Section 17 of the Terms and Conditions shall have the power to enforce this subsection.
9. Offer of Judgment. At least 14 days before the date set for the arbitration hearing, any party may serve an offer in writing upon the other party to allow judgment on specified terms. If the offer made by one party is not accepted by the other party, and the other party fails to obtain a favorable award, the other party shall not recover any post-offer costs to which they otherwise would be entitled and shall pay the offering party’s costs from the time of the offer.
10. Opt-Out. Updates to Bondyt’s Terms do not provide a new opportunity for you to opt out of arbitration if you previously agreed to a prior version of Bondyt’s Terms containing an arbitration provision and did not validly opt out of arbitration.
Previous or existing users. Users who previously agreed to arbitrate may reject this updated Arbitration Agreement by following the opt-out method below, but such users will still be bound by the most recent prior version of the Arbitration Agreement and will otherwise be bound by these Terms. Previous or existing users who do not opt out of this updated Arbitration Agreement will be bound by this Arbitration Agreement and it shall apply to all disputes between such users and Bondyt, including those arising (but not actually filed in arbitration) before the effective date of these Terms. Arbitration demands that have already been actually filed with an arbitration provider before the effective date of this Arbitration Agreement and in compliance with a prior version of this Arbitration Agreement are subject to the prior version’s terms.
New users. Users who create a Bondyt account for the first time on or after July 24, 2023 may opt out of this Arbitration Agreement.
Method and impact of opting out. Subject to the above, you may opt out of this Arbitration Agreement by sending written notice of your decision to opt out to: Bondytoptout@Bondyt.com, within 31 days after first becoming subject to this Arbitration Agreement. Your notice must include your name, your Bondyt username (if any), the email address and/or phone number you used to set up your Bondyt account (if you have one), and an unequivocal statement that you want to opt out of this Arbitration Agreement. If you opt out of this Arbitration Agreement, all other parts of the Terms and any other agreements between you and Bondyt will continue to apply to you. Opting out of this Arbitration Agreement has no effect on any other arbitration agreements that you may currently have, or may enter in the future, with us.
11. Severability. Except as provided in subsection 13(7), if any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Arbitration Agreement shall continue in full force and effect. If a court decides that any of the provisions in the Arbitration Agreement above is invalid or unenforceable because it would prevent the exercise of a non-waivable right to pursue public injunctive relief, then any dispute regarding the entitlement to such relief (and only that relief) must be severed from arbitration and may be litigated in court. All other disputes subject to arbitration under the terms of the Arbitration Agreement shall be arbitrated under its terms.
12. Survival of Agreement. The terms of this Arbitration Agreement will continue, even after your relationship with Bondyt has ended.
14. USE OF THIRD PARTY INTEGRATIONS
If you use the Snap Lenses feature offered in our App or any other AR features provided by Snap similar to Snap Lenses, you will be subject to the Snap Inc. Terms of Service, which contain an arbitration clause including a waiver of any right to participate in a class-action lawsuit or class-wide arbitration. If you do not agree to be subject to the Snap Inc. Terms of Service, you should not use the Snap-provided AR camera features within our App.
15. TERMINATION AND REMEDIES
These Terms commence on the date you accept them (as described in the preamble) and continue until terminated in accordance with the terms herein.
You can delete your Account at any time by logging into the App, going to the “Settings” tab (the gear icon), and following the instructions to terminate your account. Please note that if you delete your Account, your subscription will continue until the end of the subscription period for which applicable fees have been paid, and you will not be entitled to a refund except as stated in Section 5. In addition to deleting your account, you will also need to cancel/manage any recurring subscriptions purchased via a Third Party Store (e.g., iTunes, Google Play) to avoid additional billing.
In the event that Bondyt Technologies determines, in its sole discretion, that you have breached any portion of these Terms, have misused the App, or have otherwise demonstrated conduct which Bondyt Technologies regards as inappropriate or unlawful (whether on or off the App), Bondyt Technologies reserves the right to: (a) warn you via email (to any email addresses you have provided to Bondyt Technologies) that you have violated the Terms; (b) delete your User Content; (c) discontinue your Account; (d) discontinue your subscription(s) without refund; (e) notify and/or send your User Content to and/or fully cooperate with the proper law enforcement authorities for further action; and/or (f) pursue to any other action which Bondyt Technologies deems to be appropriate. You agree that all terminations for cause shall be made in Bondyt Technologies’s sole discretion and that Bondyt Technologies shall not be liable to you or any third party for any termination of your Account.
Termination of these Terms or your Account includes the removal of access to your Account, and all related information and content associated with or inside your Account.
If your account is terminated by you or by Bondyt Technologies for any reason, all provisions of these Terms which by their nature should survive, shall survive termination of these Terms, including, without limitation, the Arbitration Agreement, ownership provisions, warranty disclaimers and limitation of liability. Your information will be maintained and deleted in accordance with our Privacy Policy.
16. MISCELLANEOUS
There are a few more things we need to mention before you can use Bondyt.
These Terms, which we may amend from time to time, constitute the entire agreement between you and Bondyt Technologies. The Terms supersede all previous agreements, representations and arrangements between us (written or oral), excluding the Privacy Policy. Nothing in this clause shall limit or exclude any liability for fraudulent misrepresentation.
Bondyt Technologies has taken reasonable steps to ensure the currency, availability, correctness and completeness of the information contained on Bondyt and provides that information on an "as is", "as available" basis. Bondyt Technologies does not give or make any warranty or representation of any kind about the information contained on Bondyt, whether express or implied. Use of Bondyt and the materials available on it is at your sole risk. Bondyt Technologies is not responsible for any loss arising from the transmission, use of data, or inaccurate Member Content.
You are responsible for taking all necessary precautions to ensure that any material you may obtain from Bondyt is free of viruses or other harmful components. You accept that Bondyt will not be provided uninterrupted or error free, that defects may not be corrected or that Bondyt Technologies, or the server that makes it available, are free of viruses or bugs, spyware, Trojan horse or any similar malicious software. Bondyt Technologies is not responsible for any damage to your computer hardware, computer software, or other equipment or technology including, but without limitation damage from any security breach or from any virus, bugs, tampering, fraud, error, omission, interruption, defect, delay in operation or transmission, computer line or network failure or any other technical or other malfunction.
The communications between you and Bondyt Technologies may take place via electronic means, whether you use the App or send Bondyt Technologies emails, or whether Bondyt Technologies posts notices in the App or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Bondyt Technologies in electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Bondyt Technologies provides to you electronically satisfy if it were to be in writing. The foregoing does not affect your statutory rights, including but not limited to the Electronic Signatures in Global and National Commerce Act at 15 U.S.C. Sec. 7001 et. seq.
We know our Terms are awesome, but we may have to change them now and again
As Bondyt grows, we might have to make changes to these Terms so we reserve the right to modify, amend or change the Terms at any time (a “Change”). If we do this then the Changes will be posted on this page and we will indicate the Effective Date of the updates at the bottom of the Terms. In certain circumstances, we may send an email to you notifying you of a Change. It’s also possible that we might ask you to agree to our Changes, but we’ll let you know. You should regularly check this page for notice of any Changes – we want our users to be as informed as possible.
Your continued use of Bondyt following any Change constitutes your acceptance of the Change and you will be legally bound by the new updated Terms. If you do not accept any Changes to the Terms, you should stop using Bondyt immediately (uh oh, that’s going to be hard!).
Additional items:
If, for any reason, any of the Terms are declared illegal, invalid or otherwise unenforceable by a court of a competent jurisdiction, then to the extent that term is illegal, invalid or unenforceable, it shall be severed and deleted from the Terms and the remainder of the Terms shall survive, remain in full force and effect and continue to be binding and enforceable.
No failure or delay in exercising any right, power or privilege under the Terms shall operate as a waiver of such right or acceptance of any variation of the Terms and nor shall any single or partial exercise by either party of any right, power or privilege preclude any further exercise of the right or the exercise of any other right, power or privilege.
You represent and warrant that:
you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and
you are not listed on any U.S. Government list of prohibited or restricted parties.
By using the App, you agree and acknowledge that Bondyt is a global app operating through servers located in a number of countries around the world, including the United States. If you live in a country with data protection laws, the storage of your personal data may not provide you with the same protections as you enjoy in your country of residence. By submitting your personal information, or by choosing to upgrade the services you use, or by making use of the applications available on Bondyt, you agree to the transfer of your personal information to, and storage and processing of your personal information in, any such countries and destinations.
The App may contain links to third-party websites or resources. In such cases, you acknowledge and agree that we are not responsible or liable for:
the availability or accuracy of such websites or resources; or
the content, products, or services on or available from such websites or resources.
Links to such websites or resources do not imply any endorsement. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources. Framing, in-line linking or other methods of association with the App are expressly prohibited without first obtaining our prior written approval.
These Terms, and any rights and licences granted hereunder, may not be transferred or assigned by you, but may be assigned by us without restriction.
In the event there is a discrepancy between this English language version and any translated copies of the Terms, the English version shall prevail.
If you have any questions, complaints or claims with respect to the App, please contact us at feedback@team.Bondyt.com.
17. GOVERNING LAW AND FORUM
Subject to Section 13(3) and any mandatory laws that may apply in the country in which you reside, your access to the App, Our Content, and any Member Content, any claims arising from or related to your relationship with Bondyt Technologies, and these Terms are governed and interpreted by the laws of the State of Texas. All claims arising out of or relating to these Terms and/or your relationship with Bondyt Technologies that for whatever reason are not submitted to arbitration, and all claims or cases challenging the enforceability or applicability of the arbitration provisions herein, will be litigated exclusively in the federal or state courts of Travis County, Texas. You agree that such courts shall have personal jurisdiction and venue and waive any objection based on inconvenient forum. You agree that you will not file or participate in a class action against us.
18. Bondyt Technologies
The Terms constitute a binding legal agreement between you as user (“you”) and Bondyt Technologies (“we” or “us”). Bondyt Technologies includes, but is not limited to, Bondyt Holding Limited (an English company), Bondyt Technologies LLC (a Delaware limited liability company), Bondyt Inc. (a Delaware corporation), Social Online Payments Limited (a company incorporated in Ireland) and Social Online Payments L.L.C. (a Delaware limited liability company).
Effective date
The Terms were last updated on: 27th November, 2024.
`,
  },
  {
    id: "4",
    title: "Refund policy",
    content: `REFUND POLICY

Bondyt Refund Policy
Effective Date: 1st January, 2025
 Last Updated: 1st January, 2025


1. Introduction
Welcome to Bondyt! We are committed to providing you with an exceptional dating experience. This Refund Policy outlines the terms and conditions under which refunds may be issued for payments made for Bondyt’s services, including subscriptions and in-app purchases. By accessing or using Bondyt, you agree to the terms of this Refund Policy.

2. Scope of the Policy
This Refund Policy applies to:
All payments made for subscription services.
One-time purchases or in-app credits where applicable.
Any other fees charged directly by Bondyt through the Bondyt app or associated platforms.

3. Refund Eligibility
3.1. Subscription Services
Non-Refundable Fees:
 All subscription fees are non-refundable once the subscription period has begun, except where required by applicable law or in cases of a duplicate or erroneous charge.


Cancellation Policy:
 If you cancel your subscription, you will continue to have access to the service until the end of your current billing period. No prorated refunds will be provided for early termination of a subscription.


3.2. One-Time Purchases and In-App Credits
Non-Refundable Nature:
 One-time purchases and in-app credits are generally non-refundable. However, if you experience a technical issue or an error (such as a duplicate charge), please contact our support team for review.


Error or Duplicate Charges:
 Refunds may be issued for accidental duplicate charges or processing errors. Requests must be submitted within [14/30] days of the original transaction.


3.3. Exceptional Circumstances
In exceptional cases (e.g., technical issues that prevent access to services, proven errors in billing), Bondyt may, at its sole discretion, issue a refund or offer credit toward future services. Each request will be evaluated on a case-by-case basis.

4. Refund Process
4.1. How to Request a Refund
Contacting Support:
 To request a refund, please contact our Customer Support team by emailing [support@bondyt.com] or through the in-app support feature.
Required Information:
 Your refund request should include:
Your Bondyt account details (e.g., registered email address, username).
The date and amount of the transaction in question.
A description of the issue or reason for the refund request.
Any supporting documentation or screenshots, if applicable.
4.2. Review and Decision
Evaluation Period:
 Once received, your refund request will be reviewed within [5-10 business days].
Notification:
 You will be notified via email of our decision regarding your refund request. If approved, the refund will be processed using the same payment method originally used for the transaction.
4.3. Processing Time
Timeframe:
 Refunds are typically processed within [7-14 business days] following approval, depending on your bank or payment provider’s processing times.

5. Disclaimers and Limitations
Third-Party Transactions:
 If you purchased services through a third-party platform (e.g., Apple App Store or Google Play), please refer to their refund policies. Bondyt may assist with these requests but cannot guarantee outcomes.
Changes to Services:
 Bondyt reserves the right to modify, suspend, or discontinue services at any time. Refunds for service modifications or discontinuations will be handled in accordance with applicable law and this policy.
No Waiver:
 Failure to enforce any provision of this Refund Policy shall not constitute a waiver of the right to subsequently enforce that or any other provision.

6. Amendments to the Refund Policy
Bondyt may update or modify this Refund Policy from time to time. Any changes will be effective immediately upon posting in the app and/or on our website. We encourage you to review this policy periodically to stay informed about our refund practices.

7. Contact Us
If you have any questions about this Refund Policy or your transactions, please contact us at:
Email: support@bondyt.com
`,
  },

  {
    id: "5",
    title: "Merchant Policy",
    content: `
Bondyt Merchant Policy
Effective Date: 1st January, 2025
 Last Updated: 1st January, 2025
 

1. Introduction
Bondyt (“the Platform”) provides a marketplace where approved merchants (“Merchants”) may list products, services, and experiences to our community of users. This Merchant Policy (“Policy”) governs the relationship between Bondyt and any individual or entity that applies to and is approved for a merchant account, including those selling physical or digital items, listing hotels, clubs, restaurants, and other venues, as well as providing services such as private security, event management, or authoring content.
By registering as a Merchant on Bondyt, you agree to comply with this Policy and all related terms and conditions, as well as any additional guidelines provided by Bondyt.

2. Definitions
For purposes of this Policy, the following terms shall have the meanings set forth below:
Bondyt: The dating app and online platform operated by [Company Name] that facilitates interactions between users and Merchants.
Merchant: Any individual or entity approved by Bondyt to list products, services, or venues on the Platform.
Products/Items: Tangible or digital goods offered for sale by a Merchant.
Services: Non-tangible offerings, including but not limited to hotel reservations, club listings, restaurant promotions, event management services, private security services, or literary works by authors.
Listing: Any advertisement, description, image, or other content submitted by a Merchant to promote their products or services on Bondyt.
User: Any person who accesses or uses the Bondyt Platform.
Transaction: Any financial exchange conducted between a Merchant and a User through the Platform.

3. Merchant Registration and Account Management
3.1. Eligibility and Application
Registration: To become a Merchant, you must complete the registration process on the Bondyt Merchant Portal. This includes providing accurate and complete business information and agreeing to this Policy.
Verification: Bondyt reserves the right to verify the identity, business credentials, and any required licenses or permits for your particular industry (e.g., hospitality, private security, event management) before approval.
Approval: Bondyt’s sole discretion governs whether an application is approved. Bondyt may reject any application without liability or obligation to provide reasons.
3.2. Account Security and Maintenance
Responsibility: Merchants are responsible for maintaining the confidentiality of their account credentials and for all activities conducted through their account.
Updates: Merchants must promptly update any changes to their business information or contact details.

4. Listing Guidelines and Content Requirements
4.1. General Content Requirements
Accuracy: All listings must be truthful, accurate, and not misleading. Merchants must represent their products, services, and venues honestly.
Intellectual Property: Merchants must own or have the right to use all content (including images, descriptions, and logos) that they submit. Listings must not infringe upon any third-party rights.
Compliance: Listings must comply with all applicable laws and regulations, including health, safety, and licensing requirements relevant to the industry (e.g., hospitality, security, events).
4.2. Category-Specific Guidelines
Hotels, Clubs, Restaurants, and Other Venues
Listing Content: Must include clear descriptions, images, and any applicable location details. Pricing, amenities, and booking terms should be transparently stated.
Availability and Reservations: Merchants are responsible for ensuring that availability information is accurate and that any reservation or booking system is reliable.
Private Security Agencies
Licensing and Certifications: Merchants must provide verifiable evidence of proper licensing, certifications, and compliance with local regulations.
Service Descriptions: Detailed descriptions of the scope of services, including response times, personnel qualifications, and insurance coverage, must be included.
Event Management Companies
Event Information: Listings should include comprehensive details of upcoming events or services, including dates, locations, pricing, and terms and conditions for attendance or participation.
Refunds and Cancellations: Clear policies regarding ticket refunds, cancellations, or rescheduling must be provided.
Authors and Content Providers
Content Ownership: Merchants must affirm that they hold the rights to any content, publications, or literary works they offer.
Digital Delivery: For digital products, clear instructions on delivery, access, or download processes must be provided.

5. Payment Terms and Commission
5.1. Transaction Processing
Payments: All financial transactions processed through the Bondyt Platform will be handled via approved payment gateways.
Fees: Bondyt reserves the right to charge a commission fee or service fee on each transaction. The applicable fee structure will be provided during the registration process and may be updated from time to time.
Refunds and Disputes: Merchants must establish and display clear refund and cancellation policies. Bondyt may assist in mediating disputes between Merchants and Users, but Merchants are expected to resolve issues in accordance with their stated policies.
5.2. Billing and Payouts
Billing Cycles: Merchants will receive payouts according to the billing cycle set forth by Bondyt, subject to any holds or reserves as determined by Bondyt.
Chargebacks: Merchants are responsible for handling any chargebacks or payment disputes that arise and may be subject to additional fees or account review if chargebacks occur frequently.

6. Merchant Obligations and Conduct
6.1. Representations and Warranties
By using Bondyt’s merchant services, you represent and warrant that:
You are legally authorized to offer the products, services, or venues described in your listings.
Your listings comply with all applicable laws, regulations, and industry standards.
You will maintain all necessary licenses, permits, and certifications required for your operations.
6.2. Prohibited Conduct
Merchants agree not to:
Submit false, deceptive, or misleading information.
Engage in fraudulent transactions or practices.
Post content that is discriminatory, hateful, or otherwise violates Bondyt’s community standards.
Circumvent Bondyt’s fee structure or attempt to transact outside of the Platform without prior written consent.
Engage in any activity that may harm the reputation, security, or operation of the Bondyt Platform.

7. Liability, Indemnification, and Dispute Resolution
7.1. Limitation of Liability
Merchant Liability: Merchants are solely responsible for any claims, liabilities, or damages arising from the products or services they offer.
Platform Liability: Bondyt acts only as an intermediary and is not liable for any disputes or issues between Merchants and Users, except as otherwise required by law.
7.2. Indemnification
Merchants agree to indemnify, defend, and hold harmless Bondyt and its affiliates, officers, agents, and employees from any claim, demand, loss, or damage (including legal fees) arising out of or related to:
Their use of the Platform.
Any breach of this Policy.
The content of their listings.
7.3. Dispute Resolution
Direct Negotiation: Merchants and Users are encouraged to resolve disputes directly through open communication.
Mediation/Arbitration: If direct resolution fails, Bondyt may facilitate mediation or require arbitration in accordance with the Platform’s dispute resolution procedures.
Governing Law: This Policy and any disputes arising hereunder shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law provisions.

8. Privacy and Data Usage
Data Collection: Bondyt may collect and process Merchant information as described in our [Privacy Policy]. This includes business contact information, transaction data, and usage metrics.
Usage of Data: Merchant data may be used to improve service offerings, facilitate communication, and for analytical purposes. Bondyt will not share Merchant personal information with third parties except as required by law or as described in the Privacy Policy.

9. Termination and Modifications
9.1. Termination
By Bondyt: Bondyt reserves the right to terminate or suspend a Merchant’s account at any time, without prior notice, for any violation of this Policy or for conduct that may harm the Platform or its Users.
By the Merchant: Merchants may terminate their account by providing notice in accordance with Bondyt’s procedures. Outstanding obligations and disputes will continue to be governed by this Policy.
9.2. Modifications to the Policy
Bondyt may amend this Policy from time to time. Merchants will be notified of material changes via email or through the Merchant Portal. Continued use of the Platform following the posting of changes constitutes acceptance of those changes.

10. Contact Information
For any questions, concerns, or further information regarding this Merchant Policy, please contact our Merchant Support team at:
Email: [merchant@bondyt.com]
`,
  },

  {
    id: "6",
    title: "CHILD SEXUAL ABUSE AND EXPLOITATION (CSAE) POLICY",
    content: `CAES

CHILD SEXUAL ABUSE AND EXPLOITATION (CSAE) POLICY
Effective Date: 1st January, 2025
 Last Updated: 1st January, 2025
1. Purpose and Scope
This policy is designed to ensure that Bondyt maintains a safe, secure, and abuse-free environment for all its users. It applies to all employees, contractors, third-party partners, and users of Bondyt. Although our platform is strictly for adults (18 years and older), we recognize the critical importance of safeguarding against any attempts at child sexual abuse or exploitation. This policy outlines our commitment, preventative measures, reporting procedures, and enforcement mechanisms.
2. Definitions
Child: Any individual under the age of 18 years.
Sexual Abuse: Any sexual activity involving a child, including grooming, exploitation, or any attempt to initiate such behavior.
Exploitation: The act of using or benefiting from abuse or manipulation of a child for sexual purposes.
Grooming: The process of building an emotional connection with a child with the intent to lower their inhibitions for sexual exploitation.
3. Policy Statement
Bondyt is committed to zero tolerance for any form of child sexual abuse or exploitation. We strictly prohibit any content or behavior that encourages, depicts, or facilitates such abuse. Our platform is exclusively for adult users; thus, we have implemented robust measures to verify user age and monitor content to prevent any form of CSAE. Any violation will result in immediate and severe action, including permanent account suspension and notification to law enforcement.
4. Preventative Measures
Age Verification:
Mandatory age verification is required during the sign-up process using reliable methods (e.g., government-issued ID checks, third-party verification services) to ensure all users are 18 years or older.
Regular audits will be conducted to detect any discrepancies or attempts to bypass the age verification process.
Content Monitoring:
Continuous monitoring of user-generated content (profiles, messages, live streams) using automated tools and human moderators to detect any language or imagery that suggests CSAE.
Implementation of keyword filters and machine-learning algorithms to flag suspicious behavior or content for further review.
User Education and Guidelines:
Clear community guidelines are provided to all users, outlining prohibited behaviors and the consequences of violations.
Periodic reminders and in-app prompts educate users on safe practices and the importance of reporting inappropriate content or behavior.
Reporting Mechanisms:
Easy-to-access reporting tools within the app enable users to flag any content or behavior they suspect violates this policy.
A dedicated hotline and email address for urgent CSAE concerns are available 24/7.
5. Reporting and Response Procedures
Internal Reporting:
All reports of suspected CSAE will be immediately escalated to the Bondyt Safety and Compliance Team.
Reports will be investigated promptly and thoroughly, with affected accounts suspended pending investigation.
Collaboration with Law Enforcement:
Bondyt will cooperate fully with law enforcement agencies in any investigation related to CSAE.
Information will be shared in accordance with legal obligations and privacy laws, ensuring a balance between user confidentiality and the necessity of protecting vulnerable individuals.
Protection for Whistleblowers:
Users and employees reporting CSAE concerns in good faith are protected from retaliation. Confidentiality will be maintained throughout the process.
6. Responsibilities
Safety and Compliance Team:
Oversee the implementation, monitoring, and review of this CSAE policy.
Ensure all reports are handled with urgency and in compliance with legal requirements.
Employees and Moderators:
Receive ongoing training on CSAE policies and procedures.
Actively monitor content and report any suspicious activity.
Users:
Adhere to Bondyt’s community guidelines.
Report any content or behavior that they believe may contravene this policy.
7. Training and Awareness
Regular training sessions will be mandatory for all Bondyt staff and moderators on detecting, reporting, and managing CSAE incidents.
Awareness campaigns will be conducted to educate users on recognizing and reporting abusive behavior.
8. Enforcement and Disciplinary Actions
Immediate suspension and permanent banning of accounts found to be in violation of the CSAE policy.
Violation of this policy may result in legal action, including reporting to law enforcement authorities.
Regular audits and compliance reviews will be conducted to ensure the policy is upheld.
9. Monitoring, Review, and Updates
This policy will be reviewed on an annual basis, or more frequently if necessary, to adapt to emerging risks, technological advancements, and legal requirements.
User feedback and incident analysis will inform updates and improvements to our CSAE practices.
10. Communication
This policy is communicated clearly on Bondyt’s website, in our user agreements, and within the app.
Updates or changes to the policy will be promptly communicated to all stakeholders.

Bondyt is dedicated to creating a safe space for adult dating by rigorously enforcing our CSAE policy. We are committed to protecting our users and ensuring that any attempt to exploit or abuse is met with decisive action.
If you have any questions or need further information regarding this policy, please contact our Safety and Compliance Team at [support@bondyt.com].
`,
  },
]

const userImages = ["/userimage1.png", "/userimage2.png", "/userimage3.png", "/userimage4.png"]

export default function PoliciesPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const [activePolicy, setActivePolicy] = useState(policies[0])

  return (
    <div className="min-h-screen bg-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SiteHeader />

          <motion.main className="py-12" initial="initial" animate="animate" variants={staggerChildren}>
            <motion.div variants={fadeInUp} className="px-4 lg:px-40 text-center max-w-3xl mx-auto mb-16">
              <h1 className="mb-4 font-nohemi text-4xl font-medium md:text-5xl">
                We are committed to providing a safe space for everyone on Bondyt
              </h1>
              <p className="text-gray-600">
                To ensure your continuous safety when using our product, we have listed all our policies below, click on
                any of the policies below to see the efforts we have made to keep you safe
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="px-4 lg:px-40 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 lg:mx-40"
            >
              {userImages.map((image, index) => (
                <motion.div
                variants={fadeInUp} key={index} className="aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`User ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>
              ))}
            </motion.div>

            <div style={{ backgroundColor: "#f3f5fc", paddingTop: '20px', }}>
              <MobilePolicyViewer policies={policies} />
              <div
                className="px-4 lg:px-40 py-20 hidden md:grid md:grid-cols-[300px,1fr] lg:mt-20 gap-8 items-start"
              >
                <motion.div variants={fadeInUp} className="flex flex-col space-y-3">
                  {policies.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => setActivePolicy(policy)}
                      className={cn(
                        "w-full text-left px-6 py-3 transition-colors border-2 border-black",
                        activePolicy.id === policy.id
                          ? "bg-gradient-to-r from-[#F878FF] to-[#CD8DFE] text-white"
                          : "hover:bg-gray-100 bg-white text-black",
                      )}
                      style={{ fontSize: "small", borderRadius: 15, width: "fit-content" }}
                    >
                      {policy.title}
                      <span
                        style={{
                          marginLeft: 15,
                          fontSize: 20,
                          color: activePolicy.id === policy.id ? '#fff' : '#F878FF',
                        }}
                      >
                        ●
                      </span>
                    </button>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-3xl p-8 shadow-sm"
                  key={activePolicy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-medium mb-6">{activePolicy.title}</h2>
                  <div className="prose max-w-none whitespace-pre-wrap">
                    {activePolicy.content}
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.main>

          <SiteFooter />
        </>
      )}
    </div>
  )
}

