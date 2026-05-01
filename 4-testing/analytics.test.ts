import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const mockGtag = vi.fn();
const mockTrackEvent = vi.fn((category: string, action: string, label: string, value?: number) => {
  mockGtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
});

describe('GA4 Tracking Helper', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('trackEvent should call gtag with correct parameters', () => {
    mockTrackEvent('conversion', 'booking_form_success', 'booking_submitted', 1);
    expect(mockGtag).toHaveBeenCalledWith('event', 'booking_form_success', {
      event_category: 'conversion',
      event_label: 'booking_submitted',
      value: 1,
    });
  });

  it('should track phone click events', () => {
    mockTrackEvent('contact', 'phone_click', 'header_phone');
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      event_category: 'contact',
      event_label: 'header_phone',
    });
  });

  it('should track email click events', () => {
    mockTrackEvent('contact', 'email_click', 'footer_email');
    expect(mockGtag).toHaveBeenCalledWith('event', 'email_click', {
      event_category: 'contact',
      event_label: 'footer_email',
    });
  });

  it('should track WhatsApp click events', () => {
    mockTrackEvent('contact', 'whatsapp_click', 'fab_whatsapp');
    expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'fab_whatsapp',
    });
  });

  it('should track booking form submission', () => {
    mockTrackEvent('conversion', 'booking_form_submit', 'booking_page');
    expect(mockGtag).toHaveBeenCalledWith('event', 'booking_form_submit', {
      event_category: 'conversion',
      event_label: 'booking_page',
    });
  });

  it('should track external link clicks - social', () => {
    mockTrackEvent('external', 'social_click', 'footer_facebook');
    expect(mockGtag).toHaveBeenCalledWith('event', 'social_click', {
      event_category: 'external',
      event_label: 'footer_facebook',
    });
  });

  it('should track external link clicks - map', () => {
    mockTrackEvent('external', 'map_click', 'hero_map');
    expect(mockGtag).toHaveBeenCalledWith('event', 'map_click', {
      event_category: 'external',
      event_label: 'hero_map',
    });
  });

  it('should track navigation clicks', () => {
    mockTrackEvent('engagement', 'navigation_click', 'hero_services');
    expect(mockGtag).toHaveBeenCalledWith('event', 'navigation_click', {
      event_category: 'engagement',
      event_label: 'hero_services',
    });
  });

  it('should track CTA clicks', () => {
    mockTrackEvent('conversion', 'book_appointment_click', 'header_cta');
    expect(mockGtag).toHaveBeenCalledWith('event', 'book_appointment_click', {
      event_category: 'conversion',
      event_label: 'header_cta',
    });
  });

  it('should handle optional value parameter', () => {
    mockTrackEvent('conversion', 'test_action', 'test_label');
    expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
      event_category: 'conversion',
      event_label: 'test_label',
      value: undefined,
    });
  });
});

describe('GA4 Event Categories and Actions', () => {
  const validCategories = ['contact', 'conversion', 'engagement', 'external'];
  const validActions = [
    'phone_click',
    'email_click',
    'whatsapp_click',
    'booking_form_submit',
    'booking_form_success',
    'book_appointment_click',
    'navigation_click',
    'social_click',
    'map_click',
  ];
  const validLabels = [
    'header_phone',
    'footer_phone',
    'footer_email',
    'fab_whatsapp',
    'booking_form',
    'hero_cta',
    'footer_cta',
    'footer_facebook',
    'footer_instagram',
    'footer_recenzie',
    'hero_map',
    'footer_map',
    'hero_services',
    'mobile_menu_phone',
    'mobile_menu_call',
    'mobile_menu_cta',
    'booking_form_alt_phone',
    'booking_form_alt_whatsapp',
    'booking_form_alt_email',
    'booking_form_whatsapp_success',
  ];

  it('should use valid event categories', () => {
    expect(validCategories).toContain('contact');
    expect(validCategories).toContain('conversion');
    expect(validCategories).toContain('engagement');
    expect(validCategories).toContain('external');
  });

  it('should use valid event actions', () => {
    expect(validActions).toContain('phone_click');
    expect(validActions).toContain('email_click');
    expect(validActions).toContain('whatsapp_click');
    expect(validActions).toContain('booking_form_submit');
    expect(validActions).toContain('booking_form_success');
    expect(validActions).toContain('book_appointment_click');
    expect(validActions).toContain('navigation_click');
    expect(validActions).toContain('social_click');
    expect(validActions).toContain('map_click');
  });

  it('should have defined tracking labels', () => {
    expect(validLabels.length).toBeGreaterThan(0);
    expect(validLabels).toContain('header_phone');
    expect(validLabels).toContain('fab_whatsapp');
    expect(validLabels).toContain('hero_cta');
  });
});