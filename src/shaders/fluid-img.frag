uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec2 u_uvmouse;
uniform sampler2D u_texture;
uniform vec2 u_speed;

varying vec2 vUv;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

const int MAX_DIST = 8;

void main() {
    vec2 uv_mouse = (u_mouse + 1.0) * 0.5;

    vec2 gridUv = floor(vUv * vec2(32., 18.)) / vec2(32., 18.);
    vec2 mouse = u_mouse;

    vec4 color = texture2D(u_texture, vUv);
    vec4 offset = vec4(random(gridUv), random(gridUv + 1.0), random(gridUv + 2.0), 1.);

    //    float offsetX = random(gridUv) * u_speed.x * 50.;
    //    float offsetY = random(gridUv + 1.0) * u_speed.y * 50.;

    vec2 initialAnimation = vUv - 0.2 * offset.xy / u_time;

    float distFromMouse = length(uv_mouse - gridUv);
    if (distFromMouse < 0.1) {
        initialAnimation = vUv + 0.2 * offset.xy / u_time;
    } else {
        initialAnimation = vUv;
    }

    //    if (0.2 * offset.y / u_time < .15) initialAnimation = vUv;

    vec4 distort = texture2D(u_texture, initialAnimation);

    //    gl_FragColor = vec4(distort);

    gl_FragColor = vec4(u_uvmouse.r, 0., 0., 1.0);
}