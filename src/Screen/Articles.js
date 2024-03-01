import React, { useState, useEffect } from "react";
import "./Articles.css";
import Navbar from "../Compoents/Navbar";
import Footer from "../Compoents/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Articlecard from "../Compoents/Articlecard";
import first from "../Database/1.png";
import second from "../Database/2.png";
import third from "../Database/3.jpg";
import fourth from "../Database/4.png";
import fifth from "../Database/5.jpg";
import sixth from "../Database/6.png";
import seventh from "../Database/7.jpg";
import eight from "../Database/8.png"

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const [popup1, setPop1] = useState(false);
  const handleClickOpen1 = () => {
    setPop1(!popup1);
  };
  const closePopup1 = () => {
    setPop1(false);
  };
  const [popup2, setPop2] = useState(false);
  const handleClickOpen2 = () => {
    setPop2(!popup2);
  };
  const closePopup2 = () => {
    setPop2(false);
  };
  const [popup3, setPop3] = useState(false);
  const handleClickOpen3 = () => {
    setPop3(!popup3);
  };
  const closePopup3 = () => {
    setPop3(false);
  };

  const [popup4, setPop4] = useState(false);
  const handleClickOpen4 = () => {
    setPop4(!popup4);
  };
  const closePopup4 = () => {
    setPop4(false);
  };

  const [popup5, setPop5] = useState(false);
  const handleClickOpen5 = () => {
    setPop5(!popup5);
  };
  const closePopup5 = () => {
    setPop5(false);
  };


  //get articles
  const getArticle = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/allArticle");
      if (data?.success) {
        setArticles(data?.all);
        console.log("Successfully made request for article!!");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <div className="articles">
      <div>
        <Navbar />
      </div>
      <div>
        <h3 className="headline"><b>InsightIQ Hub...</b></h3>
      <div className="outerdiv">
        <div className="innerdiv">
          <div className="div1 eachdiv" onClick={handleClickOpen1}>
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Tanvisinha</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>
                4 Things I Learnt From 12th Fail, Including How Easily A Man Can
                Call A Woman A ‘Gold Digger’
              </h4>
              <p>
                “ Definitely, 12th fail has good writing, good direction, good
                support cast, good everything but I have to say it worked the
                way it did because of Vikrant Massey who plays the protagonist,
                Manoj. You feel awful when he loses his money. You cheer when he
                succeeds because even though you know life is unfair, you still
                want to believe that good things happen to good people.”
              </p>
            </div>
            <div className="pop">
              {popup1 ? (
                <div className="main">
                  <div className="popup">
                    <div className="popup-header">
                      <h3>
                        <b>
                          4 Things I Learnt From 12th Fail, Including How Easily
                          A Man Can Call A Woman A ‘Gold Digger’
                        </b>{" "}
                      </h3>
                      <h1 onClick={closePopup1}>X</h1>
                    </div>
                    <br></br>
                    <div>
                      {" "}
                      <img src={first} className="Image" />
                    </div>
                    <br></br>
                    <div>
                      <p>
                        I saw Vikrant Massey for the first time in Balika Vadhu.
                        He was Shyam, a guy interested in Sugana, who became a
                        widow on her wedding day. Sugana was a very popular
                        character. The show which was fun to watch had suddenly
                        became sad. The audience did not want to see Sugana
                        suffer. The whole of India was rooting for Shyam to be a
                        genuinely nice and broad- minded guy who would bring
                        happiness back in Sugana’s life.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        Integrity and sincerity are a good thing!
                      </h3>
                      <p>
                        Something about the face and demeanour of this man
                        exudes sincerity, goodness, innocence and integrity.
                        Definitely, 12th fail has good writing, good direction,
                        good support cast, good everything but I have to say it
                        worked the way it did because of Vikrant Massey who
                        plays the protagonist, Manoj. You feel awful when he
                        loses his money. You cheer when he succeeds because even
                        though you know life is unfair, you still want to
                        believe that good things happen to good people.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        Women leave because of abuse, not because they are ‘gold
                        diggers’
                      </h3>
                      <p>
                        I read a lot of posts from misogynist platforms on how
                        men need women like Shraddha who told Manoj that she
                        would marry him whether he becomes an IPS officer or
                        works in an Atta chakki unlike most women who are gold
                        diggers. There is a scene in the movie in which Pritam
                        Pandey tells Manoj that Shraddha will leave him if he
                        fails just like his girlfriend did because “women don’t
                        want losers.” A few scenes ago, the same guy Pritam had
                        yelled at his girlfriend and rudely reacted ,”To Kya
                        main nachoon” (so should I dance?) when she tells him
                        that she passed the exam. This guy does not realize that
                        the woman may have left him because he was rude,
                        disrespectful, jealous, and non supportive of her. It’s
                        funny how men think women almost always leave them
                        because they don’t have money and not because of their
                        behaviour/actions.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        Build a career in what you like, if you can
                      </h3>
                      <p>
                        Pritam Pandey wanted to be on TV. He was never
                        interested in UPSC. Yet, he wasted so many years trying
                        for it.This is very common with a lot of students in
                        India who forcefully study something they don’t like for
                        whatever reasons. Please remember – if you hate studying
                        something, you are probably going to hate doing it as
                        work for the rest of your life too. Save yourself.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        Dream for yourself, dream big
                      </h3>
                      <p>
                        And finally the message and inspiration from the movie
                        that we all need – No matter where you are today, no
                        matter what your circumstances are , you can always
                        dream, and work towards a better future. It is never a
                        bad time to restart.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="div2 eachdiv" onClick={handleClickOpen2}>
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Sharda Mishra</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>
                Through Sheer Determination, She Gave The Colour Of Reality To
                Her Dreams
              </h4>
              <p>
                “ She realized her dreams, and of many more women, because she
                defied the village elders.”
              </p>
            </div>
            <div>
              {popup2 ? (
                <div className="main">
                  <div className="popup" style={{marginTop:"40%"}}>
                    <div className="popup-header">
                      <h3>
                        <b>
                          Through Sheer Determination, She Gave The Colour Of
                          Reality To Her Dreams
                        </b>
                      </h3>
                      <h1 onClick={closePopup2}>X</h1>
                    </div>
                    <div className="Image">
                      <img src={second} />
                    </div>
                    <div>
                      <p>
                        This was rural India. Amidst the verdant fields and
                        bustling village life, nineteen-year-old Sunita craved
                        something more than farming, housekeeping, and
                        harvesting crops. Sunita’s hands painted magic onto
                        fabric. Her saris were not just garments; they were
                        tapestries of tradition, dyed in vibrant colors and
                        painted with the dreams of generations. She was a
                        Madhubani painting artist. The world knows this type of
                        painting also as Mithila painting.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        Madhubani art is steeped in tradition, culture, and
                        history
                      </h3>
                      <p>
                        Traditionally, Mithila painting was created by women,
                        characterized by bold, geometric patterns and a vivid
                        color palette, primarily using natural dyes. The themes
                        often depicted Hindu deities, natural elements, and
                        scenes from royal courts, reflecting a deep connection
                        with local culture and spirituality. What makes
                        Madhubani unique is its meticulous detailing, achieved
                        using fingers, twigs, and brushes, symbolizing an
                        artistic harmony between simplicity and complexity.
                        Initially, Sunita painted on mud walls and floors of her
                        home and others’ as a hobby. Soon Sunita’s art
                        transitioned to canvas and paper, in a hope to gain
                        acclaim in nearby villages and cities of Darbhanga. For
                        Sunita, Madhubani painting was not just an art form; it
                        was a cultural narrative that empowered her and
                        preserved her rich heritage.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        A form of expression for women
                      </h3>
                      <p>
                        Sunita had learned the art of Madhubani painting from
                        her mother, who in turn had learned from hers. It was a
                        skill passed down through generations, a legacy of
                        beauty and resilience. But Sunita was not content with
                        just continuing the tradition; she wanted to
                        revolutionize it. Her small village, though rich in
                        culture and skill, was hidden away from the eyes of the
                        world. The women artists, talented as they were,
                        remained confined within the boundaries of their
                        traditional roles. Sunita dreamed of changing this
                        narrative. “I want to take our art to the cities,”
                        Sunita shared her ambition with her mother, as they sat
                        under the shade of a mango tree, their fingers deftly
                        moving over a painted saree.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        Daring to dream where no one has gone before
                      </h3>
                      <p>
                        Sunita’s mother looked at her skeptically. “Sunita, no
                        one has ever done that. Our place is here, in the
                        village.” Sunita’s aspirations were not common in her
                        village, where tradition dictated the lives of women.
                        The idea of a woman venturing into the world to do
                        business was met with skepticism and outright
                        disapproval. “It’s not our way,” the panchayat said
                        unanimously, shaking their heads in the meeting. The
                        panchayat was a group of elderly men who held
                        considerable influence in the village. “A woman’s place
                        is within the confines of her home,” they said. Sunita’s
                        proposal to take her Madhubani art sarees to the city
                        was met with a mix of curiosity and skepticism.
                      </p>
                     
                      
                     
                      <h3 style={{ color: "orange" }}>
                        A beautiful brush stroke of success
                      </h3>
                      <p>
                        The exhibition was a hit. Sunita’s sarees, with their
                        intricate designs and vibrant colors, captivated the
                        city’s elite. Orders poured in, exceeding her wildest
                        dreams. It was a small step, but for Sunita, it was the
                        opening of a door that had been closed for too long. It
                        was a turning point. Soon, her sarees were being talked
                        about, admired for their blend of traditional artistry
                        and contemporary appeal. Back in her village, news of
                        her success trickled in slowly. At first, it was met
                        with disbelief. “How could a woman from our village make
                        a mark in the city?” people wondered. But as more
                        reports of her achievements came in, disbelief turned
                        into awe and, eventually, pride. The same elders who had
                        once doubted her, now spoke of her with respect. Women,
                        who had seen their ambitions stifled, looked up to
                        Sunita as a symbol of hope. Sunita’s success was not
                        just her own; it became a collective triumph. Women,
                        young and old, saw in her the possibility of a future
                        they had never dared to imagine.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        You did it! And so, now we can dream too
                      </h3>
                      <p>
                        “You’ve made us all proud, Sunita,” Uday, the Panchayat
                        head, admitted when she returned. “You’ve opened our
                        eyes to new possibilities.” The village women, once
                        hesitant, now approached her for guidance. “How did you
                        do it, Sunita?” they asked, their eyes reflecting a mix
                        of curiosity and admiration. “It wasn’t easy, but yes, I
                        still did it because our art spoke for itself. We have
                        talent that deserves recognition,” she said. Sunita’s
                        success brought more than fame and fortune; it brought
                        change in her village. The village, once skeptical of
                        her ambitions, now celebrated her achievements.
                      </p>
                      <h3 style={{ color: "orange" }}>
                        One woman’s dream empowered an entire village
                      </h3>
                      <p>
                        Sunita invested in her village, setting up workshops to
                        teach and employ women. She started a few classes in the
                        cities of Darbhanga to teach young girls and boys the
                        art of Madhubani painting. That year on Diwali night, as
                        the village glowed under the festive lights, Sunita’s
                        heart swelled with pride and joy. She had not only
                        realized her dreams but had ignited a flame of hope and
                        ambition in more village women and girls. Sunita’s story
                        was a testament to the power of belief, perseverance,
                        and the enduring strength of tradition.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="div3 eachdiv" onClick={handleClickOpen3}>
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name dark">Gargi Ghosh Das</p>
                <p className="designation dark">Verified Graduate</p>
              </div>
            </div>
            <div className="review dark">
              <h4>Ah, Goa! That Fleeting Feeling of Freedom For Women…</h4>
              <p>
                “Not because of the booze and beaches. But because of the
                unwarranted freedom it guarantees us – the women of India. The
                liberty of being ourselves, celebrating our varied and beautiful
                selves – without caring much is a refreshing feeling. It not
                only leaves you unburdened but makes you realise the beauty of
                your own physical body, the curves and the folds – everything
                that you have been taught to hide or to be ashamed of.”
              </p>
            </div>
            <div>
              {popup3 ? (
                <div className="main">
                  <div className="popup">
                    <div className="popup-header">
                      <h3>
                        <b>
                          Ah, Goa! That Fleeting Feeling of Freedom For Women…
                        </b>
                      </h3>
                      <h1 onClick={closePopup3}>X</h1>
                    </div>
                    <div className="Image">
                      <img src={third} />
                    </div>
                    <div>
                      <p>
                        How do you react in a public place, when you realize
                        that your lingerie is visible? Do you immediately slide
                        it down, beneath your dress, while a sense of
                        embarrassment overpowers you? How many times have you
                        reviewed and reconsidered the length of your skirt? How
                        much is ‘too much’? What is the line between modesty and
                        indecency? Have you ever given a thought to the roots of
                        this embarrassment? Is it because the two centimetres of
                        ‘exposed’ lingerie is a glaring expose to your
                        upbringing, your culture, your decency, your intention
                        and whatnot?! How many times did you choose not to go
                        forward with a dress because the length might
                        ‘dishonour’ your entire family?
                      </p>
                      At times when official period leaves are a hot national
                      debate, we must not forget the humungous pressure that we
                      women shoulder – unconsciously yet regularly. The
                      ‘correct’ combination of lingerie and dress along with the
                      occasion – is not simply a matter of style and comfort but
                      of family honour and dignity! That too, every single time!
                      <h3 style={{ color: "orange" }}>
                        And this is why Goa feels liberating…
                      </h3>
                      <p>
                        Not because of the booze and beaches. But because of the
                        unwarranted freedom it guarantees us – the women of
                        India. The liberty of being ourselves, celebrating our
                        varied and beautiful selves – without caring much is a
                        refreshing feeling. It not only leaves you unburdened
                        but makes you realise the beauty of your own physical
                        body, the curves and the folds – everything that you
                        have been taught to hide or to be ashamed of. As you
                        sizzle in the crashing waves, under the Sun, on the
                        pristine beaches of Goa, you feel in complete unison
                        with Nature – bold and beautiful in its nakedness and
                        abundance. Owning our body and accepting it is one of
                        the many important journeys that the women of our nation
                        need to embark on. Our bodies are natural and the
                        dresses we wear should be according to our preference
                        and comfort. Burdening them with overtly societal and
                        familial expressions is one of the many prejudices and
                        battles that we women are fighting against, daily. Goa
                        gives temporary relief from this daily battle. It is a
                        breath of fresh air from padded bras and inners and
                        shorts and tights. The breezy evening and the heady
                        music make you feel lighter and happier. As you see men
                        and women, enjoying their existence in their elements –
                        you wonder how much overburdened we are left by the
                        prying eyes of this judgmental society. How liberating
                        it is to be able to seize and exist in the moment! Just
                        like the waves crashing on the shore, you hurl all your
                        deep-rooted patriarchal conditioning aside and bask in
                        this fleeting feeling of freedom.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="div4 eachdiv" onClick={handleClickOpen4}>
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name dark">Reena Daruwalla</p>
                <p className="designation dark">Verified Graduate</p>
              </div>
            </div>
            <div className="review dark">
              <h4>
                Women Can Have Many Reasons Not To Have Kids, And Being
                Childfree Is OK!
              </h4>
              <p>
                “ it is perfectly OK not to have kids. I do not give gyan to
                people about how ‘fulfilling’ parenthood is, though it has been
                for me.”
              </p>
            </div>
            <div>
              {popup4 ? (
                <div className="main">
                  <div className="popup" style={{marginTop:"70%"}}>
                    <div className="popup-header">
                      <h3>
                        <b>
                          Women Can Have Many Reasons Not To Have Kids, And
                          Being Childfree Is OK!
                        </b>
                      </h3>
                      <h1 onClick={closePopup4}>X</h1>
                    </div>
                    <div>
                      <img src={fourth} className="Image" />
                    </div>
                    <div>
                      <p>
                        I say this as a mother of two; who thinks of her two
                        children as her absolute pride and joy and really the
                        centre of her universe: it is perfectly OK not to have
                        kids. I do not give gyan to people about how
                        ‘fulfilling’ parenthood is, though it has been for me. I
                        will not urge people to procreate because it is their
                        social and moral duty to do so – because frankly that is
                        balderdash. So when I came upon this recent Reddit
                        conversation about being childfree, it resonated with
                        me.
                      </p>
                      <h3 style={{ color: "orange" }}>Taking the pressure off women</h3>
                      <img src={fifth} className="Image" />
                      <p>
                        No sooner does she step out of college than a woman is
                        pressured to get married. No sooner is she married than
                        she is pressured to produce babies (male babies all too
                        often but that is a whole other rant). How about letting
                        her decide whether or not she wants to have kids? How
                        about letting her decide whether she wants to have
                        biological kids of her own or wants to adopt as so many
                        choose to do? As Sushmita Sen, who chose to adopt,
                        famously said, “The world would be a better place if the
                        woman decides what she wants for herself.”
                      </p>
                      <h3 style={{ color: "orange" }}>Motherhood is not necessary for fulfilment</h3>
                      <img src={sixth} className="Image" />
                      <p>
                        Women can be happy, fulfilled, complete by themselves
                        whether or not they choose to have kids. Many highly
                        successful women have chosen not to have children.
                        Shabana Azmi married Javed Akhtar who already had kids
                        from his previous marriage and chose not have children
                        of her own. Saira Banu, married to Dilip Kumar,
                        tragically lost a pregnancy in the 1970s in the eighth
                        month of pregnancy, after which the couple chose not to
                        try for children. One of the most formidably talented of
                        Indian actors, Tabu, chose to be single and child-free.
                      </p>
                      <h3 style={{ color: "orange" }}>Being a pet-parent?</h3>
                      <p>
                        For a lot of people who want to love and nurture, a
                        child is often not an option. Some choose to give that
                        love and nurturing to a cat or a dog and form that bond
                        with a non-human being. That is OK too.
                      </p>

                      <img src={seventh} className="Image" />
                      <p>
                        There are any number of reasons to choose to be a parent
                        and to choose not to be a parent – don’t let anyone else
                        tell you what yours should be. There may be reasons
                        someone wants to be a parent and cannot – this can be
                        incredibly painful, particularly when people probe and
                        judge and make unwanted suggestions. Women have enough
                        on their plate without being made to feel inadequate or
                        guilty or upset about not being able to, or choosing not
                        to be a mother. Besides India is now officially the most
                        populous country on the planet. Surely this is a
                        perfectly good reason to be child-free? Image source: by
                        FatCamera from Getty Images Signature Free for Canva Pro
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="div5 eachdiv" onClick={handleClickOpen5}>
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name">Sandhya Renukamba</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>
                Twinkle Khanna Masters Degree: Celebrate Her, Akshay, Without
                Expecting Her To Be A Superwoman!
              </h4>
              <p>
                “ Twinkle Khanna recently completed her Masters degree at the
                University of London. Her husband, Akshay Kumar was proud, but
                also put her on a pedestal - do women really want that?So it’s
                wonderful that Twinkle Khanna has done her Masters degree at the
                age of 50. It is an achievement to be celebrated. But can we do
                it without dumping more burden on her?”
              </p>
            </div>

            <div>
                {
                    popup5?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h3><b>Twinkle Khanna Masters Degree: Celebrate Her, Akshay, Without Expecting Her To Be A Superwoman!</b></h3>
                                <h1 onClick={closePopup5}>X</h1>
                            </div>
                            <div className="Image"><img src={eight}/></div>
                            <div>
                            <p>So it’s wonderful that Twinkle Khanna has done her Masters degree at the age of 50. It is an achievement to be celebrated. But can we do it without dumping more burden on her?

Twinkle Khanna had enrolled for a Masters at the University of London a couple of years ago. She has successfully handed in her thesis and earned her Masters in “Creative and Life Writing”. Her husband Akshay Kumar applauded her publicly on his social media handles.

He writes: “Two years ago when you told me you wanted to take up studies all over again, I wondered if you meant it. But the day I saw you work so hard and perfectly manage a full-fledged student life along with home, career, me and kids, I knew I had married a super woman.”He also shared her story that had a picture of the spine of her dissertation, expressing her pride in her (which was great!) but spoiling it by the next sentence: “now the most important question – when are you coming back home?”Yes, we are proud of Twinkle’s achievement – getting back to college and studying for a degree is no mean feat at her age, with all that a married woman with kids and a career deals with.</p>
<h3 style={{ color: "orange" }}>I know it first hand, because of my mother</h3>
<p>My mother went back to do her Masters when I was in my 7th grade, and it was no easy degree. She was an Ayurvedic doctor already, and in the late 1970s, the Govt of India had floated a scheme called Condensed MBBS in which medical practitioners from non-allopathic fields could do a shorter version of MBBS – covering the material for each academic year (which comprises 3 semesters) in one semester each, along with the mandatory 1 year of internship.

She did this, and I remember she was supported by her mother, my grandmother, who stayed with us to take care of the 3 kids – my younger brothers and me – while her daughter studied. My father was a Govt medical officer who stayed elsewhere, at the place where he was posted at the time while the rest of us stayed in one place in the interest of our education.I was old enough to remember the struggle and her hard work.</p>
<h3 style={{ color: "orange" }}>So celebrate Twinkle Khanna’s Masters degree, yes, but…</h3>
<p>So yes, it is quite something, even as we all know Twinkle must have had a ton of paid help to manage her household, and yes, we must celebrate her. Points to Akshay for being proud of his wife, doing this at 50.

But more than the fact that age is just a number – something else struck me in this news item.

“But the day I saw you work so hard and perfectly manage a full-fledged student life along with home, career, me, and kids, I knew I had married a superwoman.”

Women should refuse to be superwomen, or to be expected to be superwomen. Why this expectation, and why say it in a public post? Why say that she “managed” HIM, an adult?

Yes, he has been very supportive of her so many times, but that is just as it should be, not something to get him brownie points, even though sadly in when compared to the average Indian home, in the Indian context, it feels like a BIG deal.</p>
<h3 style={{ color: "orange" }}>As a popular public figure, Akshay Kumar has a responsibility</h3>
<p>This just further burdens women with these expectations. When those in the public eye with as huge a following as Akshay Kumar do and say such things, it trickles down and becomes a life narrative for other couples. As it is, his movies push a patriarchal narrative and glorify problematic toxic masculinity in the guise of “doing good”. Of course which wins him the hearts of the equally or even more misogynist men of India. And now this.

Social responsibility of celebrities does not stop at taking up feel good or “woke” topics for movie making. It also lies in the small things they say or do publicly.

Twinkle should be able to enjoy her achievement without the pedestal her husband is trying to put her on, or the expectation that she returns pell mell to take up all her responsibilities, including the part about “handling him”.

Image source: Twinkle Khanna on Masters degree on Instagram</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
          </div>
        </div>
      </div>
      <div style={{display:"flex" , flexWrap:"wrap"}} className="newarticle" >
        {articles &&
          articles.map((article) => (
            <Articlecard
              title={article.title}
              description={article.description}
              image={article.image}
              username={article.username}
              time={article.createdAt}
            />
          ))}
      </div>
      <div style={{display:"flex" , justifyContent:"center" , marginTop:"2rem" , zIndex:"inherit"}}>
        <Link to="/form">
          <button type="button" class="btn btn-primary">
            Add New Article{" "}
          </button>
        </Link>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
