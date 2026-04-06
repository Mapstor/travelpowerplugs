import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { COUNTRIES } from '@/data/countries';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ country: string }> }
) {
  const resolvedParams = await params;
  const countryIso = resolvedParams.country.replace('.png', '');
  const country = COUNTRIES.find(c => c.iso2.toLowerCase() === countryIso.toLowerCase());

  if (!country) {
    return new Response('Not found', { status: 404 });
  }

  const plugTypesString = country.plugTypes.join(' • ');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f9ff',
          backgroundImage: 'linear-gradient(to bottom right, #dbeafe, #e0e7ff)',
        }}
      >
        {/* Country Flag */}
        <img
          src={`https://flagcdn.com/w320/${country.iso2.toLowerCase()}.png`}
          alt={country.name}
          width={200}
          height={150}
          style={{
            objectFit: 'cover',
            borderRadius: 12,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            marginBottom: 32,
          }}
        />

        {/* Country Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          {country.name}
        </div>

        {/* Electric Plug Types */}
        <div
          style={{
            fontSize: 48,
            fontWeight: '600',
            color: '#3b82f6',
            marginBottom: 24,
          }}
        >
          Type {plugTypesString}
        </div>

        {/* Voltage and Frequency */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 32,
            color: '#64748b',
            marginBottom: 48,
          }}
        >
          <div>{country.voltage}V</div>
          <div>•</div>
          <div>{country.frequency}Hz</div>
        </div>

        {/* Adapter Required Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 24px',
            borderRadius: 999,
            backgroundColor: country.hasAdapter ? '#fee2e2' : '#dcfce7',
            marginBottom: 48,
          }}
        >
          <div
            style={{
              fontSize: 24,
            }}
          >
            {country.hasAdapter ? '⚠️' : '✅'}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: country.hasAdapter ? '#dc2626' : '#16a34a',
            }}
          >
            {country.hasAdapter ? 'Adapter Required (US)' : 'No Adapter Needed (US)'}
          </div>
        </div>

        {/* Website Branding */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: '#1e293b',
            }}
          >
            travelpowerplugs.com
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#64748b',
            }}
          >
            Your Complete Travel Adapter Guide
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}