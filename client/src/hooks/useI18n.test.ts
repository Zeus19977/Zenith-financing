import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useI18n } from './useI18n';

describe('useI18n', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should initialize with default language (fr)', () => {
    const { result } = renderHook(() => useI18n());
    expect(result.current.language).toBe('fr');
  });

  it('should restore language from localStorage', () => {
    localStorage.setItem('language', 'en');
    const { result } = renderHook(() => useI18n());
    
    // Wait for useEffect to run
    expect(result.current.language).toBe('en');
  });

  it('should change language', async () => {
    const { result } = renderHook(() => useI18n());
    
    await act(async () => {
      result.current.changeLanguage('es');
    });
    
    expect(result.current.language).toBe('es');
    expect(localStorage.getItem('language')).toBe('es');
  });

  it('should support all 6 languages', () => {
    const { result } = renderHook(() => useI18n());
    const languages = ['fr', 'en', 'es', 'de', 'nl', 'it'] as const;
    
    languages.forEach(lang => {
      act(() => {
        result.current.changeLanguage(lang);
      });
      expect(result.current.language).toBe(lang);
    });
  });

  it('should translate keys correctly', async () => {
    const { result } = renderHook(() => useI18n());
    
    // Wait for translations to load
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const translation = result.current.t('common.appName');
    expect(translation).toBe('Zenith Finance');
  });

  it('should return default value for missing keys', async () => {
    const { result } = renderHook(() => useI18n());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const translation = result.current.t('nonexistent.key', 'Default Value');
    expect(translation).toBe('Default Value');
  });

  it('should handle nested translation keys', async () => {
    const { result } = renderHook(() => useI18n());
    
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const translation = result.current.t('home.hero.title');
    expect(translation).toBeTruthy();
    expect(typeof translation).toBe('string');
  });
});
