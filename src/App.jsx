import React from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatar: 'https://github.com/GadiegoN.png',
      name: 'GadiegoN',
      role: 'Dev Frontend',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
      },
      {
        type: 'paragraph',
        content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },     
    ],
    publishedAt: new Date('2022/07/20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
      },
      {
        type: 'paragraph',
        content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },     
    ],
    publishedAt: new Date('2022/07/21 20:00:00')
  },
  {
    id: 3,
    author: {
      avatar: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
      },
      {
        type: 'paragraph',
        content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },     
    ],
    publishedAt: new Date('2022/07/22 20:00:00')
  },
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
   </div>
  )
}
