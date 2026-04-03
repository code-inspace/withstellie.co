import os

schema_definitions = {
    'accueil2': {
        'Hero': [('eyebrow', 'string'), ('h1', 'string'), ('subtitle', 'text'), ('cta', 'string'), ('backgroundImage', 'image')],
        'StellieIntro': [('title', 'string'), ('text1', 'text'), ('text2', 'text'), ('text3', 'text'), ('cta', 'string')],
        'Method': [('title', 'string'), ('subtitle', 'text'), ('cta', 'string')],
        'Testimonials': [('title', 'string')],
        'CTA': [('title', 'string'), ('text1', 'string'), ('text2', 'string'), ('text3', 'string'), ('cta', 'string'), ('subline', 'string')]
    },
    'about': {
        'Headline': [('title', 'string'), ('subtitle', 'string'), ('warningTitle', 'string'), ('warningText', 'text')],
        'Before': [('title', 'string'), ('text1', 'text'), ('text2', 'text'), ('text3', 'text')],
        'TurningPoint': [('title', 'string'), ('text1', 'string'), ('text2', 'text'), ('text3', 'text'), ('quote', 'string')],
        'Reconstruction': [('title', 'string'), ('subtitle', 'string'), ('text1', 'text'), ('text2', 'text'), ('text3', 'text'), ('text4', 'text')],
        'Why': [('title', 'string'), ('subtitle', 'text'), ('text1', 'text'), ('text2', 'text')],
        'Quote': [('text1', 'string'), ('text2', 'string')],
        'Method': [('title', 'string'), ('subtitle', 'string'), ('desc', 'text'), ('cta', 'string')],
        'CTA': [('title', 'string'), ('text1', 'string'), ('text2', 'string'), ('text3', 'string'), ('cta', 'string'), ('subline', 'string')]
    },
    'contact': {
        'Headline': [('title', 'string'), ('subtitle', 'text'), ('subline', 'string')],
        'ContactForm': [('firstNameLabel', 'string'), ('emailLabel', 'string'), ('subjectLabel', 'string'), ('messageLabel', 'string'), ('submitBtn', 'string'), ('privacyText', 'text')],
        'Alternatives': [('title', 'string'), ('instagram', 'string'), ('email', 'string')],
        'Redirection': [('title', 'string'), ('cta', 'string')]
    },
    'reserver': {
        'Headline': [('title', 'string'), ('subtitle', 'string'), ('text', 'text')],
        'Program': [('title', 'string'), ('text1', 'text'), ('text2', 'text'), ('text3', 'text'), ('subline', 'string')],
        'CalWidget': [('title', 'string')],
        'ContactAlt': [('title', 'string'), ('email', 'string'), ('instagram', 'string')]
    },
    'accompagnement': {
        'Headline': [('eyebrow', 'string'), ('title', 'string'), ('subtitle', 'text')],
        'MethodMBS': [('title', 'string'), ('subtitle', 'text')],
        'ForWho': [('title', 'string'), ('subtitle', 'string'), ('desc', 'text')],
        'Testimonials': [('title', 'string')],
        'Offers': [('title', 'string'), ('subtitle', 'text')],
        'FAQ': [('title', 'string')],
        'DiscoveryCall': [('title', 'string'), ('desc', 'text'), ('cta', 'string')]
    },
    'home3': {
        'Hero': [('title', 'string'), ('subtitle', 'text'), ('cta', 'string'), ('backgroundImage', 'image')],
        'Hook': [('quote', 'text'), ('author', 'string')],
        'Presentation': [('title', 'string'), ('text1', 'text'), ('text2', 'text')],
        'Focus': [('title', 'string')],
        'Method': [('title', 'string'), ('subtitle', 'text')],
        'Testimonials': [('title', 'string')],
        'CTA': [('title', 'string'), ('cta', 'string')],
        'Pricing': [('title', 'string')],
        'FAQ': [('title', 'string')],
        'CTA2': [('title', 'string'), ('subtitle', 'string'), ('cta', 'string')],
        'About': [('title', 'string'), ('desc', 'text'), ('cta', 'string')]
    }
}

os.makedirs('src/schemas', exist_ok=True)
index_exports = []
document_schemas = []

for page, sections in schema_definitions.items():
    page_file_content = "import { defineType, defineField } from 'sanity';\n\n"
    object_names = []
    for section, fields in sections.items():
        object_name = f"{page}{section}"
        object_names.append(object_name)
        
        page_file_content += f"export const {object_name} = defineType({{\n"
        page_file_content += f"  name: '{object_name}',\n"
        page_file_content += f"  title: '{page.capitalize()} - {section}',\n"
        page_file_content += f"  type: 'object',\n"
        page_file_content += f"  fields: [\n"
        page_file_content += f"    defineField({{ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }}),\n"
        
        for field, ftype in fields:
            if ftype == 'image':
                page_file_content += f"    defineField({{ name: '{field}', type: 'image', title: '{field.capitalize()}', options: {{ hotspot: true }} }}),\n"
            else:
                page_file_content += f"    defineField({{ name: '{field}_fr', type: '{ftype}', title: '{field.capitalize()} (FR)' }}),\n"
                page_file_content += f"    defineField({{ name: '{field}_en', type: '{ftype}', title: '{field.capitalize()} (EN)' }}),\n"
                
        page_file_content += "  ]\n});\n\n"
        
    doc_name = f"page{page.capitalize()}"
    page_file_content += f"export const {doc_name} = defineType({{\n"
    page_file_content += f"  name: '{doc_name}',\n"
    page_file_content += f"  title: 'Page: {page.capitalize()}',\n"
    page_file_content += f"  type: 'document',\n"
    page_file_content += f"  fields: [\n"
    for obj in object_names:
        page_file_content += f"    defineField({{ name: '{obj}', type: '{obj}', title: '{obj}' }}),\n"
    page_file_content += "  ]\n});\n"
    
    with open(f"src/schemas/{page}.ts", "w") as f:
        f.write(page_file_content)
        
    exports = ", ".join(object_names + [doc_name])
    index_exports.append(f"import {{ {exports} }} from './{page}';")
    document_schemas.extend(object_names + [doc_name])

with open("src/schemas/index.ts", "w") as f:
    f.write("\n".join(index_exports) + "\n\n")
    f.write("export const schemaTypes = [\n  " + ",\n  ".join(document_schemas) + "\n];\n")

print("Created all Sanity schemas successfully!")
