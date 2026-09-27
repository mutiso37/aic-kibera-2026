const CHURCH_EMAIL = 'info@aickibera.org';
const CHURCH_PHONE = '0725436394';
const REVEREND_NAME = 'Rev. Fredrick Kiema';

export async function submitChurchForm({
    formType,
    data = {},
    files = []
}) {
    const formData = new FormData();

    formData.append(
        '_subject',
        `A.I.C. Kibera Website — ${formType}`
    );

    formData.append(
        '_template',
        'table'
    );

    formData.append(
        '_captcha',
        'false'
    );

    formData.append(
        'Recipient',
        `${REVEREND_NAME} / Church Administration`
    );

    formData.append(
        'Church Email',
        CHURCH_EMAIL
    );

    formData.append(
        'Church Phone',
        CHURCH_PHONE
    );

    formData.append(
        'Form Type',
        formType
    );

    Object.entries(data).forEach(([key, value]) => {
        formData.append(
            key,
            value ?? ''
        );
    });

    files.forEach(({ fieldName, file }) => {
        if (file) {
            formData.append(
                fieldName,
                file,
                file.name
            );
        }
    });

    try {
        const response = await fetch(
            `https://formsubmit.co/${CHURCH_EMAIL}`,
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error(
                'The church form could not be submitted.'
            );
        }

        return {
            success: true,
            message:
                'Your application has been sent successfully.'
        };
    } catch (error) {
        console.error(
            'A.I.C. Kibera form error:',
            error
        );

        return {
            success: false,
            message:
                'We could not send your application. Please call 0725436394 or email info@aickibera.org.'
        };
    }
}