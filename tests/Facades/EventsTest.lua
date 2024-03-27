TestEvents = {}
    -- @covers Events:createFrame()
    function TestEvents:testCreateFrame()
        local events = __:new('Events')

        lu.assertNotIsNil(events.eventsFrame)
        lu.assertNotIsNil(events.eventsFrame.scripts['OnEvent'])
        lu.assertIsFunction(events.eventsFrame.scripts['OnEvent'])
    end

    -- @covers Events:handleOriginal()
    function TestEvents:testHandleOriginal()
        local events = __:new('Events')

        local callbackInvoked = false
        local callback = function (param) callbackInvoked = param end

        events:handleOriginal(nil, 'test-event', 'test-arg')

        lu.assertIsFalse(callbackInvoked)

        events.originalListeners['test-event'] = callback

        events:handleOriginal(nil, 'test-event', 'test-arg')

        lu.assertEquals('test-arg', callbackInvoked)
    end

    -- @covers StormwindLibrary.events
    function TestEvents:testLibraryInstanceIsSet()
        local events = __.events

        lu.assertNotIsNil(events)
        lu.assertNotIsNil(events.eventsFrame)

        lu.assertIsTable(events.eventStates)
        lu.assertIsTable(events.listeners)
        lu.assertIsTable(events.originalListeners)
    end

    -- @covers Events:listenOriginal()
    function TestEvents:testListenOriginal()
        local events = __:new('Events')

        local callback = function () end

        events:listenOriginal('test-event', callback)

        lu.assertEquals(callback, events.originalListeners['test-event'])
        lu.assertTrue(__.arr:inArray(events.eventsFrame.events, 'test-event'))
    end
-- end of TestEvents