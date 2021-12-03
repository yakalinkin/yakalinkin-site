import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '@layouts/header';
import { Footer } from '@layouts/footer';

import {
  Article,
  ArticleAside,
  ArticleAsideGroup,
  ArticleHeader,
  ArticleHeading,
  ArticleHeadingLevel,
  ArticleLead,
  ArticleList,
  ArticleListType,
  ArticleParagraph,
  ArticleQuote,
} from '@layouts/article';

import style from './style.module.scss';

import Line1Svg from './svg/line-1.svg';
import Line2Svg from './svg/line-2.svg';
import Line3Svg from './svg/line-3.svg';

export const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Резюме</title>
      </Helmet>
      <Header />
      <Article>
        <ArticleAsideGroup>
          <ArticleHeader>Меня зовут Ярослав.</ArticleHeader>
          <ArticleAside
            jpgName="avatar"
            text="Фото старое, давно пора обновлять"
          >
            <Line1Svg className={style.line1} />
          </ArticleAside>
        </ArticleAsideGroup>

        <ArticleLead>Я — веб-разработчик из Беларуси. Работаю в ScienceSoft над проектом страховой компании. Слабослышащий, говорю и на жестовом языке, и голосом. Легко нахожу общий язык с людьми, хоть иногда бывают сложности.</ArticleLead>

        <ArticleParagraph>С 2011 года погрузился в мир информационных технологий. Я пробовал разные направления, выбрал фронтенд — всё, что связано с веб-разработкой, сайтами и тем, что их окружает. Со временем у меня накопился немалый опыт — теперь свободно создаю сайты и веб-приложения, помогаю улучшить дизайн, также даю советы по саморазвитию.</ArticleParagraph>

        <ArticleParagraph>Помимо работы, изучаю кибербезопасность и нейросеть. Ещё люблю отличный кофе и минимализм.</ArticleParagraph>

        <ArticleQuote>Хочешь почувствовать себя человеком, <span className={style.lineGroup}>победи<Line2Svg className={style.line2} /></span> свой недуг</ArticleQuote>

        <ArticleList
          title="Работаю"
          list={[
            'Фронтенд-разработчиком в международной компании ScienceSoft с февраля 2018 года',
          ]}
        />

        <ArticleList
          title="Работал"
          list={[
            'Вордпресс-разработчиком в веб-студии с октября 2016 по январь 2018',
            'Фронтенд-разработчиком в канадской компании Xiveti с марта 2017 по апрель',
          ]}
        />

        <ArticleList
          title="Учился"
          list={[
            '2020-21 · Мидл фронтенд, Яндекс.Практикум',
            '2016-17 · Full Stack JavaScript, Treehouse',
            '2011-16 · Математика и информационные технологии, Мехмат БГУ',
          ]}
        />

        <ArticleList
          title="Знаю и умею"
          type={ArticleListType.Ordered}
          list={[
            {
              title:'Фронтенд',
              tags: [
                'HTML',
                'CSS',
                <span key={2} className={style.lineGroup}>JavaScript<Line3Svg className={style.line3} /></span>,
                'Babel',
                'TypeScript',
                'Git',
                'Sass',
                'ESLint',
                'Webpack',
                'React',
                'Redux',
                'Angular',
                'NgRx',
                'RxJS',
                'SSR',
                'Тестирование',
              ],
            },
            {
              title: 'Бэкенд',
              tags: [
                'Node.js',
                'Express.js',
                'Sequelize',
                'PostgreSQL',
                'MongoDB',
                'OAuth',
                'REST',
                'WebSocket',
              ],
            },
            {
              title: 'Девопс',
              tags: [
                'Linux',
                'Nginx',
                'Docker',
                'CI/CD',
              ],
            },
            {
              title: 'Дизайн',
              tags: [
                'UI/UX',
                'Вайрфрейм',
                'Прототип',
                'Figma',
                'Sketch',
              ],
            },
          ]}
        />

        <ArticleHeading level={ArticleHeadingLevel.H3}>Как связаться</ArticleHeading>

        <ArticleParagraph>Пишите в телеграмм <a href="https://t.me/yakalinkin" target="_blank" rel="noreferrer">@yakalinkin</a> или почту <a href="mailto:yakalinkin.job@gmail.com" target="_blank" rel="noreferrer">yakalinkin.job@gmail.com</a></ArticleParagraph>

        {/* :TODO: Download PDF */}

      </Article>
      <Footer />
    </>
  );
};
