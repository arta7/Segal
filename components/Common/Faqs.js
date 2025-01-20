import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Faqs = () => {
    return (      
        <div className="faq-area bg-2 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">برتری های ما</span>
					<h2>امتیازات همکاری با سگال ونچرز</h2>
					{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p> */}
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="faq-img">
							<img src="/img/faq-img.png" alt="Image" />
						</div>
					</div>
					
					<div className="col-lg-6">
						<div className="faq-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem  uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <span style={{color:'#096863'}}>
                                       توسعه هوشمند
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p >  مشاوره توسعه کسب و کار با بکارگیری هوش مصنوعی  </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <span style={{color:'#096863'}}>
                                           رشد و پیشرفت
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>  مشاوره ارتقاء مداوم سطح کیفی ارائه خدمات تخصصی </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <span style={{color:'#096863'}}>
                                         جایگاه علمی
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>  همکاری با نهادهای بین المللی و مراجع علمی </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <span style={{color:'#096863'}}>
                                            شبکه ی پویا
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>  امکان تعامل با متخصصان حرفه در سطح کشور </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                                
                            </Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Faqs;