import http from 'k6/http'
import { sleep } from 'k6'

export default function () {
  let res = http.get('http://host.docker.internal/api/orders')

  sleep(0.3)
}
