import { CalendarApi} from "@fullcalendar/core";

export const CALENDAR_VIEWS = {
    MONTHLY_CALENDAR: 'MONTHLY_CALENDAR',
    MEETINGS_LIST: 'MEETINGS_LIST'
}
const DEFAULT_CALENDAR_VIEW = CALENDAR_VIEWS.MONTHLY_CALENDAR

const VIEW_SEARCH_PARAM_TO_VIEW_NAME_MAPPING = {
    calendar: CALENDAR_VIEWS.MONTHLY_CALENDAR,
    list: CALENDAR_VIEWS.MEETINGS_LIST
}

export const getInitialViewName = () => {


    const viewSearchParam = new URLSearchParams(window.location.search).get('view');
    if (!Object.keys(VIEW_SEARCH_PARAM_TO_VIEW_NAME_MAPPING).includes(viewSearchParam))
        return DEFAULT_CALENDAR_VIEW
    return VIEW_SEARCH_PARAM_TO_VIEW_NAME_MAPPING[viewSearchParam]
}

const updateQueryString = (queryString: string) => {
    history.pushState(null, '', window.location.pathname + queryString);
}

export const setViewSearchParam = (viewName: string) => {
    if(viewName === DEFAULT_CALENDAR_VIEW) {
        updateQueryString('')
        return
    }

    const newViewSearchParam = Object.keys(VIEW_SEARCH_PARAM_TO_VIEW_NAME_MAPPING)
        .find(key => VIEW_SEARCH_PARAM_TO_VIEW_NAME_MAPPING[key] === viewName);

    updateQueryString(`?view=${newViewSearchParam}`)
}


export const filterEvents = (calendar: CalendarApi, hideOtherEvents: boolean) => {
    calendar.getEvents().forEach(event => {
        if(hideOtherEvents && event.groupId !== 'meeting') {
            event.setProp('display', 'none')
            return
        }
        event.setProp('display', 'auto')
    });
}


export const insertHelp = (templateSelector: string, helpSelector: string) => {
    const existingHelpEl = document.querySelector(helpSelector)
    if(existingHelpEl) existingHelpEl.remove()

    const helpEl = document.querySelector<HTMLTemplateElement>(templateSelector).content.cloneNode(true)


    const observer = new MutationObserver(() => {
        const viewRoot = document.querySelector('.fc-view-harness')
        if (!viewRoot) return;

        console.log(viewRoot)
        viewRoot.before(helpEl)
        observer.disconnect();
    });

    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
}