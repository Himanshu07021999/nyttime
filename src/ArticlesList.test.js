// ArticlesList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticlesList from './ArticlesList';

// Mock data for testing
const mockArticles = [
  {
    id: 1,
    title: 'Test Article 1',
    byline: 'Test Author 1',
    media: [
      {
        'media-metadata': [
          { url: 'https://example.com/image1.jpg' },
          { url: 'https://example.com/image1.jpg' },
          { url: 'https://example.com/image1.jpg' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Test Article 2',
    byline: 'Test Author 2',
    media: [
      {
        'media-metadata': [
          { url: 'https://example.com/image2.jpg' },
          { url: 'https://example.com/image2.jpg' },
          { url: 'https://example.com/image2.jpg' }
        ]
      }
    ]
  }
];

test('renders articles list correctly', () => {
  render(
    <Router>
      <ArticlesList articles={mockArticles} />
    </Router>
  );

  // Check if the heading is rendered
  const headingElement = screen.getByText(/New York time/i);
  expect(headingElement).toBeInTheDocument();

  // Check if each article title and byline is rendered correctly
  mockArticles.forEach(article => {
    const titleElement = screen.getByText(article.title);
    const bylineElement = screen.getByText(article.byline);
    expect(titleElement).toBeInTheDocument();
    expect(bylineElement).toBeInTheDocument();
  });

  // Check if the correct number of articles are rendered
  const articleCards = screen.getAllByRole('link', { name: /test article/i });
  expect(articleCards).toHaveLength(mockArticles.length);
});
