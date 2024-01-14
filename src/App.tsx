import Banner from './components/banner/Banner';
import Navigation from './components/navigation/Navigation';
import illustration from './assets/images/homepage/ic_first_banner.png';
import illustration2 from './assets/images/homepage/ic_second_banner.png';
import illustration3 from './assets/images/homepage/ic_third_banner.png';
import Button from './components/button/Button';
import navigationItems from './data/navigation-items';
import CardGrid from './components/card-grid/CardGrid';
import {articlesGridCards, servicesGridCards} from './data/homepage';
import Card from './components/card/Card';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';
import rightArrow from "./assets/images/homepage/slider_controls/ic_right_arrow.svg";
import downArrow from './assets/images/homepage/slider_controls/ic_down_arrow.svg';
import style from "./components/card/card.module.scss";
import React, {useState} from "react";

function App() {

    const [showAdditionalCards, setShowAdditionalCards] = useState(false);

    const handleButtonClick = () => {
        setShowAdditionalCards(!showAdditionalCards);
    }

    const cards = articlesGridCards.map((item, index) => {
        return <Card
            key={`article_card_${index}`}
            image={item.image}
            imageFull={true}
            title={item.title}
            description={item.description}
            button={item.button}
            arrowButton={rightArrow}
        />
    })

    return (
        <>
            <Navigation
                logoText='HealthCare'
                items={navigationItems}/>

            <Banner
                title='Virtual healthcare for you'
                content='Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
                button={
                    <div style={{paddingTop: '40px'}}>
                        <Button type='primary' text="Consult Today"/>
                    </div>
                }
                illustration={illustration}/>

            <CardGrid
                title='Our services'
                description='We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health'
                button={<Button text='Learn more'/>}>

                {
                    servicesGridCards.map((item, index) => {
                        return <Card
                            key={`service_card_${index}`}
                            image={item.image}
                            title={item.title}
                            description={item.description}/>
                    })
                }
            </CardGrid>

            <Banner
                separator={true}
                type='reverse'
                title='Leading healthcare providers'
                content='We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
                button={
                    <div style={{paddingTop: '40px'}}>
                        <Button text="Learn more"/>
                    </div>
                }
                illustration={illustration2}/>

            <Banner
                separator={true}
                title='Download our mobile apps'
                content='Our dedicated patient engagement app and
        web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
                button={
                    <div style={{paddingTop: '20px'}}>
                        <Button text='Download' content={
                            <img className={style.img}
                                 src={downArrow}
                                 width={15}
                                 height={15}
                                 alt='arrow-down'
                            />
                        }/>
                    </div>
                }
                illustration={illustration3}/>

            <Reviews/>

            {
                showAdditionalCards ? <div>
                    <CardGrid
                        type='right'
                        title='Check out our latest article'
                        children={cards}/>
                    <CardGrid
                        type='right'
                        button={<Button text={showAdditionalCards ? 'Hide' : 'View all'} onClick={handleButtonClick}/>}>
                        {cards}
                    </CardGrid>
                </div> : <CardGrid
                    type='right'
                    title='Check out our latest article'
                    button={<Button text={showAdditionalCards ? 'Hide' : 'View all'} onClick={handleButtonClick}/>}>
                    {cards}
                </CardGrid>
            }

            <Footer logoText='HealthCare'/>
        </>
    );
}

export default App;
