// ArticleDetail.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetail from './ArticleDetail';

const mockArticle = {
  title: 'Test Article',
  abstract: 'This is a test article',
  byline: 'Test Author',
  published_date: '2024-07-15',
  section: 'Test Section',
  media: [
    {
      'media-metadata': [
        { url: 'https://example.com/image.jpg' },
        { url: 'https://example.com/image.jpg' },
        { url: 'https://example.com/image.jpg' }
      ]
    }
  ],
  url: 'https://example.com/article/1'
};

describe('ArticleDetail Component', () => {
  it('renders article details correctly', () => {
    render(<ArticleDetail article={mockArticle} />);

    // Check if the title, abstract, byline, published date, section, and "Read more" link are rendered
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('This is a test article')).toBeInTheDocument();
    expect(screen.getByText('By: Test Author')).toBeInTheDocument();
    expect(screen.getByText('Published on: 2024-07-15')).toBeInTheDocument();
    expect(screen.getByText('Section: Test Section')).toBeInTheDocument();
    expect(screen.getByText('Read more')).toHaveAttribute('href', 'https://example.com/article/1');
  });

  it('displays loading message if article prop is null', () => {
    render(<ArticleDetail article={null} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
