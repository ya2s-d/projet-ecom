"""Builds the 8 branded Plush notification emails (English versions, the ones US customers receive).
Output: shopify/notifications/plush/<name>.liquid and <name>.subject.txt
They are pushed to Shopify as the EN translation of each EmailTemplate (translationsRegister, keys body_html and title)."""
import os, calendar, datetime
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'plush')
CDN = 'https://cdn.shopify.com/s/files/1/1112/3618/6451/files/'
LOGO = CDN + 'plush-email-logo.png?v=1795092462'
HERO_DUO = CDN + 'plush-email-hero-duo.jpg?v=1795092463'
HERO_SHOWER = CDN + 'plush-email-hero-shower.jpg?v=1795092463'
CARTRIDGE = CDN + 'plush-email-cartridge.jpg?v=1795092462'
EBOOK = CDN + 'plush-email-ebook.jpg?v=1795092727'
PROTECT = CDN + 'plush-email-protection.png?v=1795092727'
INK, PAPER, SAND, BROWN, DAY30, SMOKE, BODY = '#141414', '#F6F2ED', '#ECE2D4', '#8A4524', '#A86B45', '#6B6660', '#3F3B37'
SANS = "'Poppins',Helvetica,Arial,sans-serif"
HEAD = "'League Spartan','Poppins',Helvetica,Arial,sans-serif"
# Black Friday ends Sun 29 Nov 2026 23:59:59 New York (EST, UTC-5)
BF_END = calendar.timegm(datetime.datetime(2026, 11, 30, 4, 59, 59).timetuple())

def page(title, inner):
    return f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light">
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{{color-scheme:light only}}
body{{margin:0;padding:0;background:#E9E1D6;-webkit-text-size-adjust:100%}}
img{{border:0;line-height:100%;outline:none;text-decoration:none}}
a{{color:{INK}}}
@media (max-width:620px){{
  .pl-wrap{{width:100%!important}}
  .pl-h1{{font-size:31px!important}}
  .pl-pad{{padding-left:22px!important;padding-right:22px!important}}
  .pl-card{{padding-left:14px!important;padding-right:14px!important}}
}}
</style></head>
<body style="margin:0;padding:0;background:#E9E1D6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#E9E1D6;"><tr><td align="center" style="padding:24px 0;">
<table role="presentation" class="pl-wrap" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:{PAPER};border-radius:4px;">
{inner}
</table>
</td></tr></table>
</body></html>'''

def logo():
    return f'''<tr><td align="center" style="padding:30px 0 22px;"><a href="{{{{ shop.url }}}}" style="text-decoration:none;"><img src="{LOGO}" width="104" alt="plush" style="display:block;width:104px;height:auto;"></a></td></tr>'''

def banner(text):
    return f'''<tr><td align="center" style="background:{BROWN};padding:13px 20px;font-family:{SANS};font-size:12px;line-height:1.4;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#F7F2EA;">{text}</td></tr>'''

def bf_banner():
    return ("{%- assign pl_now = 'now' | date: '%s' | plus: 0 -%}{%- if pl_now < " + str(BF_END) + " -%}"
            + banner('Black Friday &middot; Duo $74.99 &middot; ends Nov 29')
            + '{%- else -%}' + banner('Free US shipping &middot; 60 days to try it') + '{%- endif -%}')

def kicker(text):
    return f'''<tr><td align="center" class="pl-pad" style="padding:38px 40px 0;font-family:{SANS};font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:{DAY30};">{text}</td></tr>'''

def h1(text, top=14):
    return f'''<tr><td align="center" class="pl-pad" style="padding:{top}px 44px 0;"><h1 class="pl-h1" style="margin:0;font-family:{HEAD};font-size:38px;line-height:1.08;font-weight:700;letter-spacing:-.01em;color:{INK};">{text}</h1></td></tr>'''

def lead(text):
    return f'''<tr><td align="center" class="pl-pad" style="padding:16px 56px 0;font-family:{SANS};font-size:15px;line-height:1.65;color:{BODY};">{text}</td></tr>'''

def button(label, href, top=26, bottom=34):
    return f'''<tr><td align="center" style="padding:{top}px 24px {bottom}px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" bgcolor="{INK}" style="border-radius:99px;">
<a href="{href}" style="display:inline-block;padding:16px 36px;font-family:{SANS};font-size:15px;font-weight:600;color:{PAPER};text-decoration:none;border-radius:99px;">{label}</a>
</td></tr></table></td></tr>'''

def hero(src, alt):
    return f'''<tr><td style="padding:0;"><img src="{src}" width="600" alt="{alt}" style="display:block;width:100%;max-width:600px;height:auto;"></td></tr>'''

def card(title, body, top=28):
    return f'''<tr><td class="pl-card" style="padding:{top}px 28px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FFFFFF;border-radius:20px;"><tr><td style="padding:24px 24px 22px;">
<div style="font-family:{SANS};font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:{SMOKE};padding-bottom:14px;">{title}</div>
{body}
</td></tr></table></td></tr>'''

def item_row(img, title, sub, qty, price=''):
    return f'''<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #EFE9E1;"><tr>
<td width="72" style="padding:14px 0;vertical-align:middle;">{img}</td>
<td style="padding:14px 10px 14px 14px;vertical-align:middle;font-family:{SANS};font-size:14px;line-height:1.4;color:{INK};"><b style="font-weight:600;">{title}</b>{sub}<br><span style="color:{SMOKE};font-size:13px;">Qty {qty}</span></td>
<td align="right" style="padding:14px 0;vertical-align:middle;font-family:{SANS};font-size:14px;font-weight:600;color:{INK};white-space:nowrap;">{price}</td></tr></table>'''

IMG = '<img src="{{ %s | img_url: \'compact_cropped\' }}" width="64" height="64" alt="" style="display:block;width:64px;height:64px;border-radius:12px;background:#F3EEE7;object-fit:cover;">'

NOIMG = '<img src="' + PROTECT + '" width="64" height="64" alt="" style="display:block;width:64px;height:64px;border-radius:12px;">'

def order_lines(prices=True):
    """line items of an order or checkout (subtotal_line_items)"""
    return ('{%- for line in subtotal_line_items -%}'
            '{%- if line.product.title -%}{%- assign pl_t = line.product.title -%}{%- else -%}{%- assign pl_t = line.title -%}{%- endif -%}'
            '{%- capture pl_img -%}{%- if line.image -%}' + IMG % 'line' + '{%- else -%}' + NOIMG + '{%- endif -%}{%- endcapture -%}'
            '{%- capture pl_sub -%}{%- if line.variant.title != \'Default Title\' and line.variant.title != blank -%}<br><span style="color:' + SMOKE + ';font-size:13px;">{{ line.variant.title }}</span>{%- endif -%}{%- endcapture -%}'
            '{%- capture pl_price -%}' + ('{%- if line.original_line_price != line.final_line_price -%}<s style="color:' + SMOKE + ';font-weight:400;font-size:12px;">{{ line.original_line_price | money }}</s><br>{%- endif -%}{{ line.final_line_price | money }}' if prices else '') + '{%- endcapture -%}'
            + item_row('{{ pl_img }}', '{{ pl_t }}', '{{ pl_sub }}', '{{ line.quantity }}', '{{ pl_price }}') +
            '{%- endfor -%}')

def shipment_lines():
    """line items of a fulfillment (shipping emails)"""
    return ('{%- for line in fulfillment.fulfillment_line_items -%}'
            '{%- if line.line_item.product.title -%}{%- assign pl_t = line.line_item.product.title -%}{%- else -%}{%- assign pl_t = line.line_item.title -%}{%- endif -%}'
            '{%- capture pl_img -%}{%- if line.line_item.image -%}' + IMG % 'line.line_item' + '{%- else -%}' + NOIMG + '{%- endif -%}{%- endcapture -%}'
            '{%- capture pl_sub -%}{%- if line.line_item.variant.title != \'Default Title\' and line.line_item.variant.title != blank -%}<br><span style="color:' + SMOKE + ';font-size:13px;">{{ line.line_item.variant.title }}</span>{%- endif -%}{%- endcapture -%}'
            + item_row('{{ pl_img }}', '{{ pl_t }}', '{{ pl_sub }}', '{{ line.quantity }}') +
            '{%- endfor -%}')

def total_row(label, value, strong=False):
    w = '700' if strong else '500'; sz = '16px' if strong else '14px'; c = INK if strong else BODY
    return f'''<tr><td style="padding:5px 0;font-family:{SANS};font-size:{sz};font-weight:{w};color:{c};">{label}</td><td align="right" style="padding:5px 0;font-family:{SANS};font-size:{sz};font-weight:{w};color:{c};">{value}</td></tr>'''

def totals():
    return ('{%- assign pl_order_disc = 0 -%}{%- for d in discount_applications -%}{%- if d.target_selection == \'all\' and d.target_type == \'line_item\' -%}{%- assign pl_order_disc = pl_order_disc | plus: d.total_allocated_amount -%}{%- endif -%}{%- endfor -%}'
            '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #EFE9E1;margin-top:2px;"><tr><td style="padding-top:10px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">'
            + total_row('Subtotal', '{{ subtotal_price | plus: pl_order_disc | money }}')
            + '{%- for d in discount_applications -%}{%- if d.target_selection == \'all\' and d.target_type != \'shipping_line\' -%}'
            + total_row('Discount <span style="color:' + DAY30 + ';">{{ d.title }}</span>', '&minus;{{ d.total_allocated_amount | money }}')
            + '{%- endif -%}{%- endfor -%}'
            + total_row('Shipping', '{%- if shipping_price == 0 -%}Free{%- else -%}{{ shipping_price | money }}{%- endif -%}')
            + '{%- if tax_price > 0 -%}' + total_row('Taxes', '{{ tax_price | money }}') + '{%- endif -%}'
            + '<tr><td colspan="2" style="padding:6px 0 0;border-top:1px solid #EFE9E1;font-size:0;line-height:0;">&nbsp;</td></tr>'
            + total_row('Total', '{{ total_price | money_with_currency }}', True)
            + '{%- if total_discounts > 0 -%}<tr><td colspan="2" align="right" style="padding:2px 0 0;font-family:' + SANS + ';font-size:13px;font-weight:600;color:' + DAY30 + ';">You saved {{ total_discounts | money }}</td></tr>{%- endif -%}'
            + '</table></td></tr></table>')

def tracking_block():
    return ('{%- if fulfillment.tracking_numbers.size > 0 -%}<tr><td align="center" class="pl-pad" style="padding:0 40px 30px;font-family:' + SANS + ';font-size:13px;line-height:1.6;color:' + SMOKE + ';">'
            '{%- if fulfillment.tracking_company -%}{{ fulfillment.tracking_company }} &middot; {% endif -%}'
            'Tracking number {% for n in fulfillment.tracking_numbers %}{% if fulfillment.tracking_urls[forloop.index0] %}<a href="{{ fulfillment.tracking_urls[forloop.index0] }}" style="color:' + INK + ';font-weight:600;">{{ n }}</a>{% else %}<b style="color:' + INK + ';">{{ n }}</b>{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}'
            '</td></tr>{%- endif -%}')

TRACK_URL = '{%- if fulfillment.tracking_url -%}{{ fulfillment.tracking_url }}{%- elsif fulfillment.tracking_urls.first -%}{{ fulfillment.tracking_urls.first }}{%- else -%}{{ order_status_url }}{%- endif -%}'

def steps(title, items):
    rows = ''.join(f'''<tr><td width="40" valign="top" style="padding:8px 0;"><div style="width:30px;height:30px;line-height:30px;border-radius:99px;background:{DAY30};color:#fff;text-align:center;font-family:{SANS};font-size:14px;font-weight:600;">{i}</div></td>
<td style="padding:12px 0 8px 8px;font-family:{SANS};font-size:14px;line-height:1.5;color:{BODY};"><b style="color:{INK};font-weight:600;">{t}</b> {s}</td></tr>''' for i, (t, s) in enumerate(items, 1))
    return f'''<tr><td class="pl-pad" style="padding:34px 44px 0;"><div style="font-family:{HEAD};font-size:24px;font-weight:700;color:{INK};padding-bottom:6px;">{title}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">{rows}</table></td></tr>'''

def sand_block(img, title, text, iw=152):
    return f'''<tr><td style="padding:34px 28px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:{SAND};border-radius:20px;"><tr>
<td width="{iw + 18}" style="padding:18px 0 18px 18px;"><img src="{img}" width="{iw}" alt="" style="display:block;width:{iw}px;height:auto;border-radius:14px;"></td>
<td style="padding:18px 22px 18px 18px;font-family:{SANS};font-size:14px;line-height:1.55;color:{BODY};"><div style="font-family:{HEAD};font-size:21px;line-height:1.15;font-weight:700;color:{INK};padding-bottom:6px;">{title}</div>{text}</td>
</tr></table></td></tr>'''

def perks():
    cell = lambda t, s: f'''<td align="center" width="33%" style="padding:16px 6px;font-family:{SANS};font-size:13px;line-height:1.35;color:{BODY};"><b style="display:block;font-family:{HEAD};font-size:17px;color:{INK};padding-bottom:3px;">{t}</b>{s}</td>'''
    return f'''<tr><td style="padding:30px 28px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #E2D9CC;border-bottom:1px solid #E2D9CC;"><tr>
{cell('Free', 'US shipping')}{cell('60 days', 'to try it')}{cell('No tools', 'no plumber')}</tr></table></td></tr>'''

def address():
    return ('{%- if requires_shipping and shipping_address -%}<tr><td class="pl-pad" style="padding:26px 44px 0;font-family:' + SANS + ';font-size:13px;line-height:1.6;color:' + BODY + ';">'
            '<b style="display:block;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:' + SMOKE + ';padding-bottom:4px;">Shipping to</b>{{ shipping_address | format_address }}</td></tr>{%- endif -%}')

def footer(unsub=False):
    u = ('<br><a href="{{ unsubscribe_url }}" style="color:' + SMOKE + ';">Unsubscribe</a>') if unsub else ''
    return f'''<tr><td align="center" class="pl-pad" style="padding:40px 44px 0;font-family:{SANS};font-size:14px;line-height:1.6;color:{BODY};">Questions? Just reply to this email.<br>A real person answers, usually within a day.</td></tr>
<tr><td align="center" style="padding:30px 24px 34px;"><img src="{LOGO}" width="64" alt="plush" style="display:block;width:64px;height:auto;margin:0 auto 10px;opacity:.85;">
<div style="font-family:{SANS};font-size:12px;line-height:1.7;color:{SMOKE};">Same shower. Better water.<br><a href="{{{{ shop.url }}}}" style="color:{SMOKE};">myplush.us</a> &middot; <a href="mailto:{{{{ shop.email }}}}" style="color:{SMOKE};">{{{{ shop.email }}}}</a>{u}</div></td></tr>'''

NAME = '{%- if customer.first_name -%}, {{ customer.first_name }}{%- endif -%}'
FREE_BANNER = banner('Free US shipping &middot; 60 days to try it')

EMAILS = {
 'order_confirmation': ('Your Plush order {{name}} is confirmed', page('Your Plush order is confirmed',
    logo() + FREE_BANNER + kicker('Order {{ order_name }}') + h1('Thank you' + NAME + '. Your Plush is confirmed.')
    + lead("We're getting your order ready. You'll get a tracking link by email as soon as it ships.")
    + button('View your order', '{{ order_status_url }}') + hero(HERO_DUO, 'Plush filtered shower head and spare cartridge')
    + card('Order summary', order_lines() + totals())
    + steps('What happens next', [('We pack your order.', 'It leaves our warehouse with a tracking number.'), ('It ships to you.', 'Delivery takes 7 to 12 business days.'), ('You install it in 3 steps.', 'No tools, no plumber, about 2 minutes. The guide is in the box.')])
    + '{%- assign pl_duo = false -%}{%- for line in subtotal_line_items -%}{%- if line.variant.title contains \'Spare\' -%}{%- assign pl_duo = true -%}{%- endif -%}{%- endfor -%}{%- if pl_duo -%}'
    + sand_block(EBOOK, 'Your free eBook', 'Know Your Water arrives in a separate email. It shows you how to read your city\'s water report.', iw=112) + '{%- endif -%}'
    + address() + footer())),
 'shipping_confirmation': ('Your Plush is on its way ({{ name }})', page('Your Plush is on its way',
    logo() + FREE_BANNER + kicker('Order {{ order_name }}') + h1('Your Plush is on its way.')
    + lead('Your order just shipped. Delivery takes 7 to 12 business days. Follow it anytime with the button below.')
    + button('Track your package', TRACK_URL, bottom=16) + tracking_block() + hero(HERO_SHOWER, 'Plush filtered shower head')
    + card('In this shipment', shipment_lines())
    + steps('When it arrives', [('Unscrew your old one.', 'By hand. Stuck? Wrap it in a cloth and use a wrench.'), ('Screw Plush on.', 'Drop the little rubber washer in first. Then twist it on, hand-tight.'), ('Turn on the water.', "Your routine stays the same. The water doesn't.")])
    + footer())),
 'shipping_update': ('Shipping update for order {{ name }}', page('Shipping update',
    logo() + FREE_BANNER + kicker('Order {{ order_name }}') + h1('Your tracking was updated.')
    + lead("There's news about your package. Check the latest status with the button below.")
    + button('Track your package', TRACK_URL, bottom=16) + tracking_block() + card('In this shipment', shipment_lines(), top=4) + footer())),
 'out_for_delivery': ('Your Plush arrives today ({{ name }})', page('Your Plush arrives today',
    logo() + FREE_BANNER + kicker('Order {{ order_name }}') + h1('Your Plush is out for delivery.')
    + lead("It should reach you today. Tonight's shower could be your first filtered one.")
    + button('Track your package', TRACK_URL, bottom=16) + tracking_block() + hero(HERO_SHOWER, 'Plush filtered shower head')
    + card('In this shipment', shipment_lines()) + footer())),
 'delivered': ('Your Plush has arrived ({{ name }})', page('Your Plush has arrived',
    logo() + FREE_BANNER + kicker('Order {{ order_name }}') + h1('Your Plush has arrived.')
    + lead('Time for your first filtered shower. The install guide is on the card inside the box. It takes about 2 minutes.')
    + button('View your order', '{{ order_status_url }}') + hero(HERO_DUO, 'Plush filtered shower head and spare cartridge')
    + sand_block(CARTRIDGE, 'Your day-30 test', 'After 30 days, put the spare cartridge next to the one you use. The color is what the filter held back.')
    + steps('60 days to try it', [('Use it every day.', 'Give it a real routine, not a single shower.'), ('On day 59, decide.', "If you don't love it, you get all your money back."), ('Questions before that?', 'Reply to this email. We answer within a day.')])
    + footer())),
 'order_canceled': ('Order {{ name }} has been canceled', page('Your order has been canceled',
    logo() + kicker('Order {{ order_name }}') + h1('Your order has been canceled.')
    + lead("{%- if financial_status == 'voided' -%}Your payment was released. You won't be charged.{%- elsif financial_status == 'refunded' -%}You've been refunded. It can take 5 to 10 business days to show on your statement.{%- else -%}If you have any question about it, just reply to this email.{%- endif -%}")
    + card('Canceled items', order_lines(), top=30)
    + lead('Changed your mind? Your Plush is still here.') + button('Visit Plush', '{{ shop.url }}', top=20, bottom=6) + footer())),
 'refund': ('Your refund for order {{ name }}', page('Your refund is on its way',
    logo() + kicker('Order {{ order_name }}') + h1('Your refund is on its way.')
    + lead("We've refunded <b style=\"color:" + INK + ";\">{{ amount | money_with_currency }}</b>. It can take 5 to 10 business days to show on your statement.")
    + button('View your order', '{{ order_status_url }}') + footer())),
 'abandoned_checkout': ('Your Plush is still in your cart', page('Your Plush is still in your cart',
    logo() + bf_banner() + h1('Your Plush is still waiting' + '{%- if billing_address.first_name -%}, {{ billing_address.first_name }}{%- endif -%}.', top=40)
    + lead("You left it in your cart. It's saved for you, with free US shipping and 60 days to try it.")
    + button('Complete your order', '{{ url }}') + hero(HERO_DUO, 'Plush filtered shower head and spare cartridge')
    + card('Your cart', order_lines()) + perks()
    + button('Complete your order', '{{ url }}', top=30, bottom=0) + footer(unsub=True))),
}

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for name, (subject, body) in EMAILS.items():
        open(os.path.join(OUT, name + '.liquid'), 'w').write(body)
        open(os.path.join(OUT, name + '.subject.txt'), 'w').write(subject)
        print(f'{name:24s} {len(body):6d} chars  | {subject}')
